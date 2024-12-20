import { auth } from "@/auth";
import { dbConnect } from "@/lib/db-connect";
import { ProjectModel } from "@/lib/models/project-model";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const GET = auth(async (req: any) => {
  if (!req.auth || !req.auth.user?.isAdmin) {
    return Response.json({ message: "Unauthorized" }, { status: 401 });
  }
  await dbConnect();
  const products = await ProjectModel.find();
  return Response.json(products);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}) as any;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const POST = auth(async (req: any) => {
  if (!req.auth || !req.auth.user?.isAdmin) {
    return Response.json({ message: "Unauthorized" }, { status: 401 });
  }
  await dbConnect();

  const project = new ProjectModel({
    title: "sample-title",
    slug: "sample-slug",
    description: "sample-description",
    tags: ["sample-tag"],
    category: "sample-category",
    thumbnail: "/images/placeholder.png",
    images: ["/images/placeholder.png"],
    designer: "sample-designer",
  });

  try {
    await project.save();

    return Response.json(
      { message: "Project created", project },
      { status: 201 }
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    return Response.json({ message: err.message }, { status: 500 });
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}) as any;
