"use client";

import Link from "next/link";
import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "@/components/logo";
import { NavItem } from "@/components/nav";
import { LogoutBtn } from "@/components/logout-btn";

import { cn } from "@/lib/utils";

interface MobileMenuProps {
  items: NavItem[];
}

export const MobileMenu = ({ items }: MobileMenuProps) => {
  const pathname = usePathname();
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="md:hidden">
        <RiMenu3Fill className="h-6 w-6" />
      </SheetTrigger>
      <SheetContent side="top" className="py-8 px-4 md:hidden">
        <SheetHeader>
          <SheetTitle>
            <Logo />
          </SheetTitle>
        </SheetHeader>
        <ul className="flex flex-col items-center gap-4 my-10">
          {items.map(({ name, href }) => (
            <li key={name} onClick={() => setIsOpen(false)}>
              <Link
                href={href}
                className={cn(
                  "text-xl tracking-wide font-primary uppercase",
                  pathname === href && "text-accent"
                )}
              >
                {name}
              </Link>
            </li>
          ))}
          {!session?.user.isAdmin ? (
            <li key="login" onClick={() => setIsOpen(false)}>
              <Link
                href="/login"
                className={cn(
                  "text-xl tracking-wide font-primary uppercase",
                  pathname === "/login" && "text-accent"
                )}
              >
                Login
              </Link>
            </li>
          ) : (
            <li key="logout" onClick={() => setIsOpen(false)}>
              <LogoutBtn isMobile />
            </li>
          )}
        </ul>
      </SheetContent>
    </Sheet>
  );
};
