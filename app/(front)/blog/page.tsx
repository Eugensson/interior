import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

import { Pagination } from "@/components/pagination";
import { ArticleCard } from "@/components/article-card";
import { SectionHeader } from "@/components/section-header";

import { formatDate } from "@/lib/utils";
import { getByQuery } from "@/lib/services/article";
import { Article } from "@/lib/models/article-model";

const Blog = async ({
  searchParams,
}: {
  searchParams: Promise<{
    q: string;
    category: string;
    tag: string;
    page: string;
  }>;
}) => {
  const { q = "", category = "", tag = "", page = "1" } = await searchParams;

  const getFilterUrl = ({
    c,
    t,
    pg,
  }: {
    c?: string;
    t?: string;
    pg?: string;
  }) => {
    const params: Record<string, string> = { q, category, tag, page };

    if (c) params.category = c;
    if (t) params.tag = t;
    if (pg) params.page = pg;

    return `/blog?${new URLSearchParams(params).toString()}`;
  };

  const { articles, totalPages } = await getByQuery({ q, category, tag });

  const latestPost = articles[0];

  return (
    <>
      <SectionHeader
        title="Articles & News"
        subtitle="Home / Blog"
        className="bg-blog"
      />
      <div className="container py-20 space-y-20">
        {articles.length > 0 && (
          <div className="flex flex-col gap-12">
            <h2 className="h2 capitalize mb-7">Latest post</h2>
            <article className="flex">
              <div className="flex-1 relative aspect-square overflow-hidden rounded-3xl">
                <Image
                  src={latestPost.thumbnail}
                  alt="Interior Photo"
                  fill
                  quality={100}
                  className="object-cover object-center"
                />
              </div>
              <div className="flex-1 space-y-6 p-12">
                <h3 className="h2 capitalize">{latestPost.title}</h3>
                <p className="text-secondary text-lg line-clamp-6">
                  {latestPost.descriptions}
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-secondary text-base">
                    {formatDate(latestPost.createdAt)}
                  </p>
                  <Link
                    href={`/blog/${latestPost.slug}`}
                    className="w-14 h-14 rounded-full text-primary hover:text-white focus:text-white bg-accent-secondary hover:bg-accent focus:bg-accent focus:outline-white transition-colors duration-300 flex justify-center items-center"
                  >
                    <ChevronRight />
                  </Link>
                </div>
              </div>
            </article>
          </div>
        )}
        <div className="flex flex-col gap-12">
          <h2 className="h2 capitalize mb-7">Articles & News</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-7">
            {articles.length > 0 ? (
              articles.slice(1, undefined).map((article: Article) => (
                <li key={article.slug}>
                  <ArticleCard article={article} />
                </li>
              ))
            ) : (
              <li>No articles found</li>
            )}
          </ul>
          {totalPages > 1 && (
            <Pagination
              currentPage={Number(page)}
              totalPages={totalPages}
              getFilterUrl={getFilterUrl}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Blog;
