import cloudinary from "cloudinary";

import { auth } from "@/auth";
import { dbConnect } from "@/lib/db-connect";
import { ProjectModel } from "@/lib/models/project-model";

cloudinary.v2.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const GET = auth(async (...args: any) => {
  const [req, { params }] = await args;
  const { id } = await params;

  if (!req.auth || !req.auth.user?.isAdmin) {
    return Response.json({ message: "Unauthorized" }, { status: 401 });
  }
  await dbConnect();

  const project = await ProjectModel.findById(id);

  if (!project) {
    return Response.json({ message: "Project not found" }, { status: 404 });
  }
  return Response.json(project);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}) as any;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const PUT = auth(async (...args: any) => {
  const [req, { params }] = await args;
  const { id } = await params;

  if (!req.auth || !req.auth.user?.isAdmin) {
    return Response.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { title, description, tags, category, images, designer } =
    await req.json();

  try {
    await dbConnect();

    const project = await ProjectModel.findById(id);

    if (project) {
      project.title = title;
      project.description = description;
      project.tags = [...tags.split(",")];
      project.category = category;
      project.images = images;
      project.thumbnail = images[0];
      project.designer = designer;

      const updatedProject = await project.save();

      return Response.json(updatedProject);
    } else {
      return Response.json({ message: "Project not found" }, { status: 404 });
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    return Response.json({ message: err.message }, { status: 500 });
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}) as any;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const DELETE = auth(async (...args: any) => {
  const [req, { params }] = await args;
  const { id } = await params;

  if (!req.auth || !req.auth.user?.isAdmin) {
    return Response.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    await dbConnect();

    const project = await ProjectModel.findById(id);

    if (project) {
      const imageDeletionPromises = project.images.map((image: string) => {
        const urlParts = image.split("/");
        const fileNameWithExtension = urlParts.pop();

        if (!fileNameWithExtension) {
          throw new Error("Couldn't find fileNameWithExtension with URL");
        }

        const [publicId] = fileNameWithExtension.split(".");
        if (!publicId) {
          throw new Error(
            "It was not possible to select publicId from fileNameWithExtension"
          );
        }

        return cloudinary.v2.uploader.destroy(publicId);
      });

      await Promise.all(imageDeletionPromises);

      await project.deleteOne();

      return Response.json({
        message: "Project and images deleted",
      });
    } else {
      return Response.json({ message: "Project not found" }, { status: 404 });
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    return Response.json({ message: err.message }, { status: 500 });
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}) as any;
