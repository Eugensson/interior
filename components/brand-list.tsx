import Image from "next/image";

import { BRAND_LIST } from "@/lib/constants";

export const BrandList = () => {
  return (
    <ul className="container py-5 md:py-10 lg:py-20 flex justify-between items-center gap-20">
      {BRAND_LIST.map((item) => (
        <li key={item.label}>
          <Image src={item.image} alt={item.label} width={150} height={100} />
        </li>
      ))}
    </ul>
  );
};
