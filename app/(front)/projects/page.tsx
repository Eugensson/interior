import Link from "next/link";

import { Pagination } from "@/components/pagination";
import { ProdectCard } from "@/components/project-card";
import { SectionHeader } from "@/components/section-header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Project } from "@/lib/models/project-model";
import { Category, getByQuery } from "@/lib/services/project";

const Projects = async ({
  searchParams,
}: {
  searchParams: Promise<{ category: Category; page: string }>;
}) => {
  const { category = "bathroom", page = "1" } = await searchParams;

  const getFilterUrl = ({ c, pg }: { c?: Category; pg?: string }) => {
    const params = { category, page };
    if (c) params.category = c;
    if (pg) params.page = pg;
    return `/projects?${new URLSearchParams(params).toString()}`;
  };

  const { totalPages, projects, categories } = await getByQuery({
    category,
    page,
  });

  const renderProjects = (category: Category) => {
    return projects
      .filter((project: Project) => project.category === category)
      .map((project) => <ProdectCard key={project.slug} project={project} />);
  };

  return (
    <>
      <SectionHeader
        title="Our Projects"
        subtitle="Home / Projects"
        className="bg-projects"
      />
      <Tabs
        defaultValue="bathroom"
        className="container py-10 w-full flex flex-col items-center"
      >
        <TabsList className="max-w-max mb-8">
          {categories.map((c: Category) => (
            <TabsTrigger key={c} value={c}>
              <Link href={getFilterUrl({ c })}>{c}</Link>
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((c) => (
          <TabsContent key={c} value={c} className="w-full">
            <ul className="grid grid-cols-2 gap-7">{renderProjects(c)}</ul>
          </TabsContent>
        ))}
      </Tabs>
      {totalPages > 1 && (
        <Pagination
          currentPage={Number(page)}
          totalPages={totalPages}
          getFilterUrl={getFilterUrl}
        />
      )}
    </>
  );
};

export default Projects;
