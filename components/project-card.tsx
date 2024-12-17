import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Project } from "@/lib/models/project-model";

export const ProdectCard = ({ project }: { project: Project }) => {
  return (
    <Card className="border-none">
      <CardContent className="p-0 overflow-hidden">
        <Image
          src={project.thumbnail}
          alt={project.title}
          width={600}
          height={600}
          className="object-cover aspect-square"
        />
      </CardContent>
      <CardHeader className="px-0 flex flex-row items-center justify-between">
        <div>
          <CardTitle className="font-primary font-normal tracking-wide text-2xl capitalize">
            {project.title}
          </CardTitle>
          <CardDescription className="text-lg">
            Decor / Architecture
          </CardDescription>
        </div>
        <Link
          href={`/projects/${project.slug}`}
          className="w-16 h-16 rounded-full text-primary hover:text-white focus:text-white bg-accent-secondary hover:bg-accent focus:bg-accent focus:outline-white transition-colors duration-300 flex justify-center items-center"
        >
          <ChevronRight />
        </Link>
      </CardHeader>
    </Card>
  );
};
