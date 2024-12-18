import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn, formatNumber } from "@/lib/utils";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  getFilterUrl: (params: { pg?: string }) => string;
}

export const Pagination = ({
  currentPage,
  totalPages,
  getFilterUrl,
}: PaginationProps) => {
  return (
    <ul className="container flex justify-center items-center gap-x-5">
      {currentPage > 1 && (
        <li className="w-10 h-10 border border-accent flex justify-center items-center rounded-full hover:bg-accent-secondary hover:border-accent-secondary transition-colors duration-300">
          <Link href={getFilterUrl({ pg: `${currentPage - 1}` })}>
            <ChevronLeft />
          </Link>
        </li>
      )}
      {Array.from(Array(totalPages).keys()).map((p) => (
        <li
          key={p}
          className={cn(
            "w-10 h-10 border border-accent flex justify-center items-center rounded-full hover:bg-accent-secondary hover:border-accent-secondary transition-colors duration-300",
            currentPage === p + 1
              ? "bg-accent-secondary border-accent-secondary"
              : ""
          )}
        >
          <Link href={getFilterUrl({ pg: `${p + 1}` })} className="text-base">
            {formatNumber(p + 1)}
          </Link>
        </li>
      ))}
      {currentPage < totalPages && (
        <li className="w-10 h-10 border border-accent flex justify-center items-center rounded-full hover:bg-accent-secondary hover:border-accent-secondary transition-colors duration-300">
          <Link href={getFilterUrl({ pg: `${currentPage + 1}` })}>
            <ChevronRight />
          </Link>
        </li>
      )}
    </ul>
  );
};
