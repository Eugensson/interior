import { cache } from "react";

import { dbConnect } from "@/lib/db-connect";
import { Service, ServiceModel } from "@/lib/models/service-model";

export const revalidate = 3600;

export const getAllServices = cache(async (): Promise<Service[]> => {
  await dbConnect();

  const services = await ServiceModel.find()
    .sort({ createdAt: -1 })
    .select("title subtitle slug icon");

  return services;
});

export const getBySlug = cache(async (slug: string): Promise<Service> => {
  await dbConnect();

  const service = await ServiceModel.findOne({ slug });

  if (!service) {
    throw new Error("Service not found");
  }

  return service;
});
