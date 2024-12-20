import Link from "next/link";

import { Nav } from "@/components/nav";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { LogoutBtn } from "@/components/logout-btn";
import { MobileMenu } from "@/components/mobile-menu";

import { ADMIN_NAV_LINKS } from "@/lib/constants";

export const AdminHeader = () => {
  return (
    <header className="py-8 sticky top-0 z-50 bg-white shadow-md">
      <nav className="container flex items-center justify-between">
        <Logo />
        <div className="hidden md:flex items-center md:gap-4 lg:gap-8">
          <Nav items={ADMIN_NAV_LINKS} />
          <div className="flex gap-4">
            <Button asChild>
              <Link href="/">Website</Link>
            </Button>
            <LogoutBtn />
          </div>
        </div>
        <MobileMenu items={ADMIN_NAV_LINKS} />
      </nav>
    </header>
  );
};
