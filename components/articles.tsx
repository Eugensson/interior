import { ArticleCard } from "@/components/article-card";

import { Article } from "@/lib/models/article-model";
import { getLatestArticles } from "@/lib/services/article";

export const Articles = async () => {
  const latestArticles = await getLatestArticles();

  return (
    <section className="container xl:bg-grid xl:bg-center pt-5 md:pt-10 lg:pt-20 flex flex-col items-center gap-y-10">
      <h2 className="h2">Articles & News</h2>
      <p className="max-w-[550px] text-center">
        It is a long established fact that a reader will be distracted by the of
        readable content of a page when lookings at its layouts the points of
        using.
      </p>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {latestArticles.map((article: Article) => (
          <li key={article.slug}>
            <ArticleCard article={article} />
          </li>
        ))}
      </ul>
    </section>
  );
};
