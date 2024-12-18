"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { SearchBox } from "@/components/search-box";

import { cn } from "@/lib/utils";

export const Filter = ({
  tags,
  articleTags,
  categories,
}: {
  tags: string[];
  articleTags: string[];
  categories: string[];
}) => {
  const searchParams = useSearchParams();

  const getFilterUrl = (paramName: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(paramName, value);
    return `/blog?${params.toString()}`;
  };

  return (
    <aside className="w-[345px] h-fit flex flex-col gap-y-12">
      <SearchBox />

      <div>
        <h3 className="h3 mb-5">Categories</h3>
        <ul className="flex flex-col gap-y-5">
          {categories.map((category: string, index: number) => (
            <li
              key={index}
              className={cn(
                "py-4 capitalize",
                index !== categories.length - 1 ? "border-b border-accent" : ""
              )}
            >
              <Link href={getFilterUrl("category", category)}>{category}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="h3 mb-5">Tags</h3>
        <ul className="flex flex-wrap gap-4">
          {tags.map((tag: string, index: number) => (
            <li key={index}>
              <Link href={getFilterUrl("tag", tag)}>
                <Badge
                  variant={articleTags.includes(tag) ? "default" : "primary"}
                  className="px-5 py-2.5 rounded-md text-base font-light capitalize"
                >
                  {tag}
                </Badge>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};
