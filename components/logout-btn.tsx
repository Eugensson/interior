"use client";

import { signOut } from "next-auth/react";

import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

export const LogoutBtn = ({ isMobile }: { isMobile?: boolean }) => {
  const logoutHandler = () => {
    signOut({ callbackUrl: "/login" });
  };

  return (
    <Button
      variant={isMobile ? "link" : "default"}
      onClick={logoutHandler}
      className={cn(
        "p-4",
        isMobile &&
          "text-xl tracking-wide text-secondary font-primary uppercase"
      )}
    >
      Logout
    </Button>
  );
};
