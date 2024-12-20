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
import { Badge } from "@/components/ui/badge";

export type ProjectRow = {
  id: string;
  image: string;
  title: string;
  designer: string;
  category: string;
  descriptions: string;
  tags: string[];
};

const ProjectActions = ({ projectId }: { projectId: string }) => {
  const router = useRouter();
  const { toast } = useToast();

  const { trigger: deleteProject } = useSWRMutation(
    `/api/admin/projects`,
    async (url, { arg }: { arg: { projectId: string } }) => {
      try {
        const res = await fetch(`${url}/${arg.projectId}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        });
        const data = await res.json();
        if (res.ok) {
          toast({ title: "Project deleted" });
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
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreVertical className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <Button variant="link" size="sm" asChild>
            <Link
              href={`/admin/projects/${projectId}`}
              className="flex items-center gap-2"
            >
              <PencilIcon className="size-4 text-emerald-500" />
              Edit
            </Link>
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Button
            variant="link"
            aria-label="Кнопка видалення продукту"
            size="sm"
            className="flex items-center gap-2"
            onClick={() => deleteProject({ projectId })}
          >
            <TrashIcon className="size-4 text-red-500" />
            Delete
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const columns: ColumnDef<ProjectRow>[] = [
  {
    accessorKey: "image",
    header: () => <p className="sr-only">Image</p>,
    cell: ({ row }) => {
      const imageUrl =
        (row.getValue("image") as string) ?? "/images/placeholder.png";
      return (
        <div className="flex justify-center items-center">
          <Image
            src={imageUrl}
            alt={`Image of ${row.original.title}`}
            width={100}
            height={100}
            className="aspect-square object-cover"
          />
        </div>
      );
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
          <ArrowUpAZ className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const title = row.getValue("title") as string;

      return <p className="line-clamp-2 ml-4">{title}</p>;
    },
  },
  {
    accessorKey: "designer",
    header: ({ column }) => {
      return (
        <Button
          variant="link"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="opacity-80 hover:no-underline"
        >
          Designer
          <ArrowUpAZ className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const designer = row.getValue("designer") as string;
      return <p className="line-clamp-2 ml-4">{designer}</p>;
    },
  },
  {
    accessorKey: "category",
    header: ({ column }) => {
      return (
        <Button
          variant="link"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="opacity-80 hover:no-underline"
        >
          Category
          <ArrowUpAZ className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const category = row.getValue("category") as number;
      return <p className="ml-4 capitalize">{category}</p>;
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
          Description
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
    accessorKey: "tags",
    header: ({ column }) => {
      return (
        <Button
          variant="link"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="opacity-80 hover:no-underline"
        >
          Tags
          <ArrowUpAZ className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const tags = row.getValue("tags") as string[];
      return (
        <ul className="ml-1 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li key={tag}>
              <Badge variant="outline" className="rounded-md capitalize">
                {tag}
              </Badge>
            </li>
          ))}
        </ul>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <ProjectActions projectId={row.original.id} />,
  },
];
