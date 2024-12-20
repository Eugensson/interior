import { cache } from "react";

import { dbConnect } from "@/lib/db-connect";
import { Article, ArticleModel } from "@/lib/models/article-model";

export const revalidate = 3600;

const PAGE_SIZE = 7;

type GetArticlesResponse = {
  articles: Article[];
  page: number;
  totalArticles: number;
  totalPages: number;
};

class NotFoundError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "NotFoundError";
  }
}

export const getTags = cache(async (): Promise<string[]> => {
  await dbConnect();
  const tags = await ArticleModel.distinct("tags");
  return tags;
});

export const getCategories = cache(async (): Promise<string[]> => {
  await dbConnect();

  const categories = await ArticleModel.distinct("category");
  return categories;
});

export const getAuthors = cache(async (): Promise<string[]> => {
  await dbConnect();

  const authors = (await ArticleModel.distinct("author")) as string[];
  return authors;
});

export const getLatestArticles = cache(async (): Promise<Article[]> => {
  await dbConnect();

  const articles = await ArticleModel.find().sort({ createdAt: -1 }).limit(3);
  return articles;
});

export const getBySlug = cache(async (slug: string): Promise<Article> => {
  await dbConnect();

  const article = await ArticleModel.findOne({ slug });

  if (!article) {
    throw new NotFoundError("Article not found");
  }

  return article;
});

export const getByQuery = cache(
  async ({
    q = "",
    category,
    tag,
    page = "1",
  }: {
    q?: string;
    category?: string;
    tag?: string;
    page?: string;
  }): Promise<GetArticlesResponse> => {
    await dbConnect();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const filters: Record<string, any> = {};

    if (q) {
      filters.$or = [
        { title: { $regex: q, $options: "i" } },
        { descriptions: { $regex: q, $options: "i" } },
      ];
    }

    if (category) {
      filters.category = {
        $in: Array.isArray(category) ? category : [category],
      };
    }

    if (tag) {
      filters.tags = { $in: Array.isArray(tag) ? tag : [tag] };
    }

    const skip = PAGE_SIZE * (Number(page) - 1);

    const [articles, totalArticles] = await Promise.all([
      ArticleModel.find(filters)
        .skip(skip)
        .limit(PAGE_SIZE)
        .lean<Article[]>()
        .sort({ createdAt: -1 })
        .select("-__v"),
      ArticleModel.countDocuments(filters),
    ]);

    return {
      articles,
      page: Number(page),
      totalArticles,
      totalPages: Math.ceil(totalArticles / PAGE_SIZE),
    };
  }
);
