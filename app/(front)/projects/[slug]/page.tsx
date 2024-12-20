import { GalleryImages } from "@/components/gallery-images";
import { SectionHeader } from "@/components/section-header";

import { formatProjectDate } from "@/lib/utils";
import { getBySlug } from "@/lib/services/project";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const slug = (await params).slug;
  try {
    const project = await getBySlug(slug);

    if (!project) {
      return { title: "Project not found" };
    }

    return { title: project.title };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return { title: "Project not found" };
  }
};

const ProjectDetails = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const slug = (await params).slug;
  const project = await getBySlug(slug);

  return (
    <>
      <SectionHeader
        title={`${project.title}`}
        subtitle="Home / Project details"
        className="bg-project"
      />
      <div className="container py-20 space-y-10">
        <div className="flex gap-10">
          <ul className="w-[500px] h-fit bg-accent-secondary flex flex-col gap-y-5 py-14 px-10 rounded-3xl">
            <li className="flex justify-between items-end text-lg">
              <h4 className="h4">ID</h4>
              ...{project._id.toString().slice(-6)}
            </li>
            <li className="flex justify-between items-end capitalize text-lg">
              <h4 className="h4">Category</h4>
              {project.category}
            </li>
            <li className="flex justify-between items-end capitalize text-lg">
              <h4 className="h4">Tags</h4>
              <span className="max-w-40 flex text-right flex-wrap">
                {project.tags.slice(0, -1).map((tag) => tag + ", ")}
                {project.tags.slice(-1)}
              </span>
            </li>
            <li className="flex justify-between items-end capitalize text-lg">
              <h4 className="h4">Date</h4>
              {formatProjectDate(project.createdAt)}
            </li>
            <li className="flex justify-between items-end capitalize text-lg">
              <h4 className="h4">Designer</h4>
              <span className="max-w-40 flex text-right flex-wrap">
                {project.designer}
              </span>
            </li>
          </ul>
          <div className="flex-1 flex flex-col gap-y-10">
            <h2 className="h2 capitalize">{project.title}</h2>
            <p className="text-secondary">{project.description}</p>
          </div>
        </div>
        <GalleryImages images={project.images} />
      </div>
    </>
  );
};

export default ProjectDetails;
