"use client";

import { useState } from "react";
import { Search, XIcon } from "lucide-react";
import { useSearchParams } from "next/navigation";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export const SearchBox = () => {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);

  const clearInput = () => {
    setQuery("");
  };

  return (
    <form action="/blog" method="GET" className="relative">
      <Label htmlFor="search" className="sr-only">
        Search
      </Label>
      <Input
        name="q"
        id="search"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border-none rounded-md bg-accent-secondary pl-6 pr-20 py-7 placeholder:text-accent placeholder:text-lg placeholder:font-normal text-lg"
      />
      {query.trim() !== "" && (
        <Button
          type="button"
          variant="link"
          onClick={clearInput}
          className="absolute right-10 top-1/2 -translate-y-1/2 opacity-50 hover:opacity-100 transition-opacity duration-300"
        >
          <XIcon />
        </Button>
      )}

      <Button
        type="submit"
        variant="link"
        className="absolute right-2 top-1/2 -translate-y-1/2 text-accent"
      >
        <Search />
      </Button>
    </form>
  );
};
