import { EditArticleForm } from "@/components/edit-article-form";

import { getAuthors, getCategories } from "@/lib/services/article";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  if (!id) {
    return { title: "Article not found" };
  }

  return {
    title: `Edit article ${id}`,
  };
};

const EditArticle = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const authors = await getAuthors();
  const categories = await getCategories();

  return <EditArticleForm id={id} authors={authors} categories={categories} />;
};

export default EditArticle;
