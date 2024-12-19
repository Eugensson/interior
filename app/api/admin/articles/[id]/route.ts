import slugify from "slugify";
import cloudinary from "cloudinary";

import { auth } from "@/auth";
import { dbConnect } from "@/lib/db-connect";
import { ArticleModel } from "@/lib/models/article-model";

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

  const article = await ArticleModel.findById(id);
  if (!article) {
    return Response.json({ message: "Article not found" }, { status: 404 });
  }
  return Response.json(article);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}) as any;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const PUT = auth(async (...args: any) => {
  const [req, { params }] = await args;
  const { id } = await params;

  if (!req.auth || !req.auth.user?.isAdmin) {
    return Response.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { title, description, tags, category, image, author } =
    await req.json();

  try {
    await dbConnect();

    const article = await ArticleModel.findById(id);

    if (article) {
      article.title = title;
      article.slug = slugify(title, { lower: true });
      article.author = author;
      article.category = category;
      article.tags = [
        ...tags.split(",").map((tag: string) => tag.trim().toLowerCase()),
      ];
      article.description = description;
      article.image = image;

      const updatedArticle = await article.save();

      return Response.json(updatedArticle);
    } else {
      return Response.json({ message: "Article not found" }, { status: 404 });
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

    const article = await ArticleModel.findById(id);

    if (!article) {
      return Response.json({ message: "Article not found" }, { status: 404 });
    }

    if (article.image) {
      const urlParts = article.image.split("/");
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

      await cloudinary.v2.uploader.destroy(publicId);
    }

    await article.deleteOne();

    return Response.json({
      message: "Article and image deleted successfully",
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    return Response.json({ message: err.message }, { status: 500 });
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}) as any;
