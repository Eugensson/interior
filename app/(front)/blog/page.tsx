import { ARTICLE_LIST } from "@/lib/constants";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ArticleCard } from "@/components/article-card";
import { PaginationBar } from "@/components/pagination-bar";

const latestPost = ARTICLE_LIST[0];

const Blog = () => {
  return (
    <section>
      <div className="relative bg-blog bg-contain bg-no-repeat bg-center min-h-[300px] min-w-screen">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-fit py-5 text-center bg-white rounded-t-3xl">
          <h1 className="h2 text-accent mb-2">Articles & News</h1>
          <p className="h4 text-secondary">Home / Blog</p>
        </div>
      </div>
      <div className="container py-20 space-y-20">
        <div className="flex flex-col gap-12">
          <h2 className="h2 capitalize mb-7">Latest post</h2>
          <article className="flex">
            <div className="flex-1 relative aspect-square overflow-hidden rounded-3xl">
              <Image
                src={latestPost.imagethumb}
                alt="Interior Photo"
                fill
                quality={100}
                className="object-cover object-center"
              />
            </div>
            <div className="flex-1 space-y-6 p-12">
              <h3 className="h2 capitalize">{latestPost.title}</h3>
              <p className="text-secondary text-lg line-clamp-6">
                {latestPost.description}
              </p>
              <div className="flex justify-between items-center">
                <p className="text-secondary text-base">{latestPost.date}</p>
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
        <div className="flex flex-col gap-12">
          <h2 className="h2 capitalize mb-7">Articles & News</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-7">
            {ARTICLE_LIST.slice(1, undefined).map((item) => (
              <li key={item.slug}>
                <ArticleCard article={item} />
              </li>
            ))}
          </ul>
          <PaginationBar />
        </div>
      </div>
    </section>
  );
};

export default Blog;
