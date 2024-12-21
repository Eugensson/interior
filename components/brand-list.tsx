import Image from "next/image";

import { BRAND_LIST } from "@/lib/constants";

export const BrandList = () => {
  return (
    <ul className="container xl:bg-grid xl:bg-center py-10 lg:py-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10">
      {BRAND_LIST.map((item) => (
        <li key={item.label} className="m-auto">
          <Image src={item.image} alt={item.label} width={100} height={100} />
        </li>
      ))}
    </ul>
  );
};
