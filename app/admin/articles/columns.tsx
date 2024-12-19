"use client";

import Link from "next/link";
import Image from "next/image";
import useSWRMutation from "swr/mutation";
import { useRouter } from "next/navigation";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpAZ, MoreVertical, PencilIcon, TrashIcon } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

import { useToast } from "@/hooks/use-toast";

export type ArticleRow = {
  id: string;
  title: string;
  author: string;
  description: string;
  image: string;
  updateAt: string;
};

const ArticleActions = ({ articleId }: { articleId: string }) => {
  const router = useRouter();
  const { toast } = useToast();

  const { trigger: deleteArticle } = useSWRMutation(
    "/api/admin/articles",
    async (url, { arg }: { arg: { articleId: string } }) => {
      try {
        const res = await fetch(`${url}/${arg.articleId}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        });
        const data = await res.json();
        if (res.ok) {
          toast({
            title: "Article deleted",
          });
          router.refresh();
        } else {
          toast({
            title: data.message,
            variant: "destructive",
          });
        }
      } catch {
        toast({
          title: "Something went wrong. Try again.",
          variant: "destructive",
        });
      }
    }
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="link">
          <span className="sr-only">Open menu</span>
          <MoreVertical />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <Button variant="link" asChild>
            <Link
              href={`/admin/articles/${articleId}`}
              className="flex items-center gap-2 opacity-75 hover:opacity-100 hover:no-underline transition-opacity duration-300"
            >
              <PencilIcon />
              Edit
            </Link>
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Button
            variant="link"
            aria-label="Delete article"
            onClick={() => deleteArticle({ articleId })}
            className="opacity-75 hover:opacity-100 hover:no-underline transition-opacity duration-300"
          >
            <TrashIcon />
            Delete
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const columns: ColumnDef<ArticleRow>[] = [
  {
    accessorKey: "image",
    header: () => <p className="sr-only">Image</p>,
    cell: ({ row }) => {
      const imageUrl =
        (row.getValue("image") as string) ?? "/images/placeholder.png";
      return (
        <Image
          src={imageUrl}
          alt={`Image of ${row.original.image}`}
          width={50}
          height={50}
          className="aspect-square object-cover"
        />
      );
    },
  },
  {
    accessorKey: "author",
    header: ({ column }) => {
      return (
        <Button
          variant="link"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="opacity-80 hover:no-underline"
        >
          Author
          <ArrowUpAZ className="size-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const author = row.getValue("author") as string;
      return <p className="max-w-60 line-clamp-2 ml-4">{author}</p>;
    },
  },
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Button
          variant="link"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="opacity-80 hover:no-underline"
        >
          Title
          <ArrowUpAZ className="size-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const title = row.getValue("title") as string;
      return <p className="max-w-60 line-clamp-2 ml-4">{title}</p>;
    },
  },
  {
    accessorKey: "description",
    header: ({ column }) => {
      return (
        <Button
          variant="link"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="opacity-80 hover:no-underline"
        >
          Descriptions
          <ArrowUpAZ className="size-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const description = row.getValue("description") as string;
      return <p className="max-w-96 line-clamp-4 ml-4">{description}</p>;
    },
  },
  {
    accessorKey: "updateAt",
    header: ({ column }) => {
      return (
        <Button
          variant="link"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="opacity-80 hover:no-underline"
        >
          UpdateAt
          <ArrowUpAZ className="size-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const updateAt = row.getValue("updateAt") as string;
      return <p className="ml-4 truncate">{updateAt}</p>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <ArticleActions articleId={row.original.id} />,
  },
];
