import { auth } from "@/auth";
import { dbConnect } from "@/lib/db-connect";
import { ArticleModel } from "@/lib/models/article-model";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const GET = auth(async (req: any) => {
  if (!req.auth || !req.auth.user.isAdmin) {
    return Response.json({ message: "Unauthorized" }, { status: 401 });
  }

  await dbConnect();
  const articles = await ArticleModel.find();
  return Response.json(articles);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}) as any;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const POST = auth(async (req: any) => {
  if (!req.auth || !req.auth.user?.isAdmin) {
    return Response.json({ message: "Unauthorized" }, { status: 401 });
  }

  await dbConnect();

  const article = new ArticleModel({
    title: "sample-title",
    slug: "sample-slug",
    description: "sample-description",
    tags: [],
    category: "sample-category",
    image: "/images/placeholder.png",
    author: "sample-author",
  });

  try {
    await article.save();

    return Response.json(
      { message: "Article created successfully", article },
      { status: 201 }
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    return Response.json({ message: err.message }, { status: 500 });
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}) as any;
