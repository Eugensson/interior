import Link from "next/link";
import { ArrowRight } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export type Service = {
  title: string;
  slug: string;
  descriptions: string;
};

export const ServiceCard = ({ item }: { item: Service }) => {
  return (
    <Link href={`/services/${item.slug}`} className="group outline-none">
      <Card className="border-none overflow-hidden rounded-[30px] py-10 group-hover:bg-accent-secondary group-focus:bg-accent-secondary">
        <CardHeader>
          <CardTitle className="font-primary font-normal text-center ">
            {item.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-secondary text-center">{item.descriptions}</p>
        </CardContent>
        <CardFooter className="justify-center">
          <span className="capitalize flex items-center gap-x-2 text-base">
            Read more
            <ArrowRight className="text-accent" />
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
};
