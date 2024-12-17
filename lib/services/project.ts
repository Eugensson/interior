import { cache } from "react";

import { dbConnect } from "@/lib/db-connect";
import { Project, ProjectModel } from "@/lib/models/project-model";

export const revalidate = 3600;

export type Category = "bathroom" | "kitchen" | "living room" | "bedroom";

const PAGE_SIZE = 4;

type GetProjectsResponse = {
  projects: Project[];
  categories: Category[];
  page: number;
  totalProjects: number;
  totalPages: number;
};

export const getLatestProjects = cache(async (): Promise<Project[]> => {
  await dbConnect();

  const projects = await ProjectModel.find().sort({ createdAt: -1 }).limit(4);

  return projects;
});

export const getByQuery = cache(
  async ({
    category = "bathroom",
    page = "1",
  }: {
    category?: Category;
    page?: string;
  }): Promise<GetProjectsResponse> => {
    await dbConnect();

    const categoryFilter = { category: { $in: category.split(",") } };

    const skip = PAGE_SIZE * (Number(page) - 1);

    const projects = await ProjectModel.find(categoryFilter)
      .skip(skip)
      .limit(PAGE_SIZE)
      .lean<Project[]>();

    const totalProjects = await ProjectModel.countDocuments(categoryFilter);

    const categories = await ProjectModel.distinct("category");

    return {
      projects,
      categories,
      page: Number(page),
      totalProjects,
      totalPages: Math.ceil(totalProjects / PAGE_SIZE),
    };
  }
);

export const getBySlug = cache(async (slug: string): Promise<Project> => {
  await dbConnect();

  const project = await ProjectModel.findOne({ slug });

  if (!project) {
    throw new Error("Project not found");
  }

  return project;
});
