import { NextResponse } from "next/server";

import sampleData from "@/lib/sample-data";

import { dbConnect } from "@/lib/db-connect";
import { UserModel } from "@/lib/models/user-model";
import { ProjectModel } from "@/lib/models/project-model";
import { ArticleModel } from "@/lib/models/article-model";
import { ServiceModel } from "@/lib/models/service-model";

export const GET = async () => {
  if (process.env.NODE_ENV !== "development") {
    return NextResponse.json(
      { message: "This route is only available in development mode" },
      { status: 403 }
    );
  }

  try {
    await dbConnect();

    const { users, projects, articles, services } = sampleData;

    await UserModel.deleteMany();
    await UserModel.insertMany(users);

    await ProjectModel.deleteMany();
    await ProjectModel.insertMany(projects);

    await ArticleModel.deleteMany();
    await ArticleModel.insertMany(articles);

    await ServiceModel.deleteMany();
    await ServiceModel.insertMany(services);

    return NextResponse.json({
      message: "Database seeded successfully",
      usersCount: users.length,
      projectsCount: projects.length,
      articlesCount: articles.length,
      servicesCount: services.length,
    });
  } catch (error) {
    console.error("Error during database seeding:", error);

    const errorMessage =
      error instanceof Error
        ? error.message
        : "An unknown error occurred during database seeding.";

    return NextResponse.json(
      {
        message: "Failed to seed the database",
        error: errorMessage,
      },
      { status: 500 }
    );
  }
};
