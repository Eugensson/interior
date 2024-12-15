import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center gap-x-2 text-2xl text-primary font-primary"
    >
      <Image src="/icons/logo.svg" alt="Logo" width={20} height={20} />
      IntDesign
    </Link>
  );
};
