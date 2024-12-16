import { Nav } from "@/components/nav";
import { Logo } from "@/components/logo";

export const Header = () => {
  return (
    <header className="py-10 sticky top-0 z-50 bg-white">
      <div className="container flex items-center justify-between">
        <Logo />
        <Nav />
      </div>
    </header>
  );
};