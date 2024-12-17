"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { useSearchParams } from "next/navigation";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

import { cn } from "@/lib/utils";

export const Filter = ({
  tags,
  categories,
}: {
  tags: string[];
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
      <Label htmlFor="search" className="relative">
        <Input
          name="q"
          id="search"
          placeholder="Search"
          className="border-none rounded-lg bg-accent-secondary pl-6 pr-12 py-7 placeholder:text-accent placeholder:text-lg placeholder:font-normal"
        />
        <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-accent" />
      </Label>

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
                  variant="primary"
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
