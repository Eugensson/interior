import Link from "next/link";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SocialItem, Socials } from "@/components/socials";

export type Employee = {
  name: string;
  slug: string;
  position: string;
  country: string;
  image: string;
  phone: string;
  email: string;
  socials: SocialItem[];
};

export const EmployeeCard = ({ item }: { item: Employee }) => {
  const { name, position, country, image, socials, slug } = item;
  return (
    <Card className="border-none rounded-2xl">
      <CardContent className="p-0 overflow-hidden rounded-2xl h-[300px]">
        <Link href={`/team/${slug}`}>
          <Image
            src={image}
            alt={name}
            width={450}
            height={450}
            className="object-contain hover:scale-105 transition-transform duration-300"
          />
        </Link>
      </CardContent>
      <CardHeader>
        <CardTitle className="font-primary font-normal text-center mb-2">
          {name}
        </CardTitle>
        <CardDescription className="text-center text-base">
          {position}, {country}
        </CardDescription>
      </CardHeader>
      <CardFooter className="justify-center">
        <Socials items={socials} />
      </CardFooter>
    </Card>
  );
};
