import mongoose from "mongoose";

export const dbConnect = async (): Promise<void> => {
  if (!process.env.MONGODB_URI) {
    throw new Error("MongoDB URI is not defined in environment variables");
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
  } catch (error) {
    throw new Error(`Connection failed: ${(error as Error).message}`);
  }
};
