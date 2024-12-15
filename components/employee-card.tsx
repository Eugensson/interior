import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Employee } from "@/lib/types";
import Link from "next/link";

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
        <ul className="flex gap-x-4">
          {socials.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <Link href={href}>
                <Icon className="text-secondary hover:text-primary transition-colors duration-300" />
              </Link>
            </li>
          ))}
        </ul>
      </CardFooter>
    </Card>
  );
};
