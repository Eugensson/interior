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

import { Employee } from "@/lib/types";

export const TeamCard = ({ item }: { item: Employee }) => {
  const { name, position, country, image, email, phone, socials, slug } = item;
  return (
    <Card className="relative border-none rounded-2xl h-[400px] group cursor-pointer">
      <CardContent className="p-0 overflow-hidden w-full h-full rounded-2xl">
        <Link href={`/team/${slug}`}>
          <Image
            src={image}
            alt={name}
            width={600}
            height={600}
            className="object-cover w-full h-full"
          />
        </Link>
      </CardContent>
      <div className="absolute w-full h-full px-2 py-16 rounded-2xl bg-white top-0 left-0 opacity-0 group-hover:opacity-100 flex flex-col justify-between transition-opacity duration-300 ease-in-out">
        <CardHeader>
          <CardTitle className="font-primary font-normal text-center mb-2">
            {name}
          </CardTitle>
          <CardDescription className="text-center text-base">
            {position}, {country}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="flex justify-center gap-x-4">
            {socials.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <Link href={href}>
                  <Icon className="text-secondary hover:text-primary transition-colors duration-300" />
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="justify-center flex flex-col gap-y-2">
          <Link
            href={`tel:+15555555555`}
            className="text-secondary hover:text-primary"
          >
            {phone}
          </Link>
          <Link
            href={`mailto:${email}`}
            className="text-secondary hover:text-primary"
          >
            {email}
          </Link>
        </CardFooter>
      </div>
    </Card>
  );
};
