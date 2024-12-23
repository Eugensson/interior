import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { formatDate } from "@/lib/utils";
import { Article } from "@/lib/models/article-model";

export const ArticleCard = ({ article }: { article: Article }) => {
  return (
    <Card className="p-6 rounded-3xl group hover:bg-accent-secondary focus:bg-accent-secondary">
      <CardContent className="p-0 overflow-hidden rounded-t-3xl mb-5">
        <Image
          src={article.image}
          alt={article.title}
          width={400}
          height={400}
          className="object-cover aspect-square"
        />
      </CardContent>
      <CardHeader className="p-0 mb-5">
        <CardTitle className="font-normal text-xl font-primary tracking-wide">
          {article.title}
        </CardTitle>
      </CardHeader>
      <CardFooter className="p-0 flex items-center justify-between">
        <p className="text-secondary text-base">
          {formatDate(article.createdAt)}
        </p>
        <Link
          href={`/blog/${article.slug}`}
          className="w-16 h-16 rounded-full bg-accent-secondary group-hover:bg-white transition-colors duration-300 flex justify-center items-center"
        >
          <ChevronRight className="text-primary" />
        </Link>
      </CardFooter>
    </Card>
  );
};
