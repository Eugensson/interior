import { BRAND_LIST } from "@/lib/constants";
import Image from "next/image";

export const BrandList = () => {
  return (
    <ul className="flex justify-between items-center gap-x-20">
      {BRAND_LIST.map((item) => (
        <li key={item.label}>
          <Image src={item.image} alt={item.label} width={50} height={50} />
        </li>
      ))}
    </ul>
  );
};
