"use client";

import { RiMenu3Fill } from "react-icons/ri";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "./logo";
import { NAV_MOBILE_LINKS } from "@/lib/constants";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const MobileMenu = () => {
  const pathname = usePathname();
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
          {NAV_MOBILE_LINKS.map(({ name, href }) => (
            <li key={name} onClick={() => setIsOpen(false)}>
              <Link
                href={href}
                className={cn(
                  "text-3xl tracking-wide font-primary uppercase",
                  pathname === href && "text-accent"
                )}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
};
