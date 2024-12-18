import bcrypt from "bcryptjs";
import { Schema, model, models } from "mongoose";

export type User = {
  name: string;
  email: string;
  password: string;
  role: "user" | "admin";
};

const UserSchema = new Schema<User>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+\@.+\..+/i, "Enter a valid email"],
    },
    password: {
      type: String,
      required: true,
      minlength: [6, "Password must be at least 6 characters"],
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  { timestamps: true, versionKey: false }
);

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

UserSchema.set("toJSON", {
  transform: (_, ret) => {
    delete ret.password;
    return ret;
  },
});

// UserSchema.index({ email: 1 });

export const UserModel = models?.User || model("User", UserSchema);