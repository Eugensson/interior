"use client";

import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

import { Button } from "@/components/ui/button";

export const LogoutBtn = () => {
  const logoutHandler = () => {
    signOut({ callbackUrl: "/login" });
  };

  return (
    <Button onClick={logoutHandler}>
      <LogOut className="mr-2" />
      Logout
    </Button>
  );
};
