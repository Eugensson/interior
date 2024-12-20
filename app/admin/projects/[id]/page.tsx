import { EditProjectForm } from "@/components/edit-project-form";
import { getAllCategories, getAllDesigners } from "@/lib/services/project";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  if (!id) {
    return { title: "Project not found" };
  }

  return {
    title: `Edit project ${id}`,
  };
};

const ProjectDetails = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const designers = await getAllDesigners();
  const categories = await getAllCategories();

  return (
    <EditProjectForm id={id} designers={designers} categories={categories} />
  );
};

export default ProjectDetails;
