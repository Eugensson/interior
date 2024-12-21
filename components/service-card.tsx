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
  subtitle: string;
  images: string[];
  descriptions: string;
  icon: React.ElementType;
};

export const ServiceCard = ({
  item: { title, slug, subtitle, icon: Icon },
}: {
  item: Service;
}) => {
  return (
    <Link href={`/services/${slug}`} className="group outline-none">
      <Card className="border-none overflow-hidden rounded-3xl py-10 group-hover:bg-accent-secondary group-focus:bg-accent-secondary">
        <CardHeader>
          <Icon className="text-accent mx-auto mb-5" size={40} />
          <CardTitle className="font-primary font-normal text-center capitalize">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-secondary text-center px-5">{subtitle}</p>
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
