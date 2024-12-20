import Link from "next/link";

import { Nav } from "@/components/nav";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { LogoutBtn } from "@/components/logout-btn";
import { MobileMenu } from "@/components/mobile-menu";

import { auth } from "@/auth";

import { HEADER_NAV_LINKS, MOBILE_NAV_LINKS } from "@/lib/constants";

export const Header = async () => {
  const session = await auth();

  return (
    <header className="py-8 sticky top-0 z-50 bg-white">
      <div className="container flex items-center justify-between">
        <Logo />
        <div className="hidden md:flex items-center md:gap-4 lg:gap-8">
          <Nav items={HEADER_NAV_LINKS} />
          {session && session.user.isAdmin ? (
            <div className="flex gap-4">
              <Button asChild>
                <Link href="/admin/overview">Dashboard</Link>
              </Button>
              <LogoutBtn />
            </div>
          ) : (
            <Button className="w-fit p-4 text-base" asChild>
              <Link href="/login">Login</Link>
            </Button>
          )}
        </div>
        <MobileMenu items={MOBILE_NAV_LINKS} />
      </div>
    </header>
  );
};
