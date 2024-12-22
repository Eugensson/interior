import slugify from "slugify";
import { Schema, model, models, Types } from "mongoose";

export type Service = {
  _id: Types.ObjectId;
  title: string;
  slug: string;
  subtitle: string;
  description: string;
  icon: string;
  createdAt: Date;
  updatedAt: Date;
};

const serviceSchema = new Schema<Service>(
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
    subtitle: {
      type: String,
      required: true,
      validate: {
        validator: (v: string) => v.length <= 1000,
        message: "Description cannot exceed 1000 characters",
      },
    },
    description: {
      type: String,
      required: true,
      validate: {
        validator: (v: string) => v.length <= 3000,
        message: "Description cannot exceed 3000 characters",
      },
    },
    icon: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);

serviceSchema.pre("save", async function (next) {
  if (this.isModified("title")) {
    let slug = slugify(this.title, { lower: true });
    let exists = await ServiceModel.exists({ slug });
    while (exists) {
      slug = slugify(this.title, { lower: true }) + "-" + Date.now();
      exists = await ServiceModel.exists({ slug });
    }
    this.slug = slug;
  }
  next();
});

export const ServiceModel = models.Service || model("Service", serviceSchema);
