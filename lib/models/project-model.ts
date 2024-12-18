import slugify from "slugify";
import { Schema, Types, model, models } from "mongoose";

export type Project = {
  _id: Types.ObjectId;
  title: string;
  slug: string;
  descriptions: string;
  tags: string[];
  category: string;
  thumbnail: string;
  images: string[];
  designers: string[];
  createdAt: Date;
  updatedAt: Date;
};

const projectSchema = new Schema<Project>(
  {
    title: { type: String, required: true },
    slug: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: (v: string) => /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(v),
        message: "Slug can only contain lowercase letters, numbers, and dashes",
      },
    },
    descriptions: {
      type: String,
      required: true,
      validate: {
        validator: (v: string) => v.length <= 3000,
        message: "Descriptions cannot exceed 3000 characters",
      },
    },
    tags: { type: [String], required: true },
    category: { type: String, required: true },
    thumbnail: { type: String, required: true },
    images: {
      type: [String],
      required: true,
      // validate: {
      //   validator: (v: string[]) =>
      //     v.length > 0 &&
      //     v.length <= 10 &&
      //     v.every((img) =>
      //       /^https?:\/\/.+\.(jpg|jpeg|png|webp|svg)$/.test(img)
      //     ),
      //   message:
      //     "Images must include 1-10 valid URLs with extensions: jpg, jpeg, png, webp, or svg",
      // },
    },
    designers: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

projectSchema.pre("save", async function (next) {
  if (this.isModified("title")) {
    let slug = slugify(this.title, { lower: true });
    let exists = await ProjectModel.exists({ slug });
    while (exists) {
      slug = slugify(this.title, { lower: true }) + "-" + Date.now();
      exists = await ProjectModel.exists({ slug });
    }
    this.slug = slug;
  }
  next();
});

// projectSchema.index({ slug: 1 });
// projectSchema.index({ category: 1 });
// projectSchema.index({ tags: 1 });

export const ProjectModel = models.Project || model("Project", projectSchema);