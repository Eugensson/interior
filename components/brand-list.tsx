import Image from "next/image";

import { cn } from "@/lib/utils";

import { BRAND_LIST } from "@/lib/constants";

export const BrandList = ({ className }: { className?: string }) => {
  return (
    <ul className={cn("flex justify-between items-center gap-x-20", className)}>
      {BRAND_LIST.map((item) => (
        <li key={item.label}>
          <Image src={item.image} alt={item.label} width={150} height={100} />
        </li>
      ))}
    </ul>
  );
};
