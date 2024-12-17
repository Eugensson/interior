import { Filter } from "@/components/filter";

import { getBySlug, getCategories, getTags } from "@/lib/services/article";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const slug = (await params).slug;
  try {
    const article = await getBySlug(slug);

    if (!article) {
      return { title: "Article not found" };
    }

    return { title: article.title };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return { title: "Article not found" };
  }
};

const ArticlesDetails = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const slug = (await params).slug;
  const article = await getBySlug(slug);
  const tags = await getTags();
  const categories = await getCategories();

  return (
    <section>
      <div className="relative bg-article bg-contain bg-no-repeat bg-center min-h-[300px] min-w-screen">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-fit py-5 text-center bg-white rounded-t-3xl px-5">
          <h1 className="h2 text-accent mb-2 capitalize truncate">
            {article.title}
          </h1>
          <p className="h4 text-secondary">Home / Article Details</p>
        </div>
      </div>
      <div className="container py-20 flex gap-12">
        <div className="flex-1">article details</div>
        <Filter tags={tags} categories={categories} />
      </div>
    </section>
  );
};

export default ArticlesDetails;
