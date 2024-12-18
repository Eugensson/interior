import { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      _id?: string | null;
      role?: "admin" | "user";
    } & DefaultSession["user"];
  }

  export interface User extends DefaultUser {
    _id?: string;
    role?: "admin" | "user";
  }
}
