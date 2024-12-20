import Image from "next/image";
import { RiDoubleQuotesL } from "react-icons/ri";

import { Filter } from "@/components/filter";
import { Socials } from "@/components/socials";
import { ContactForm } from "@/components/contact-form";
import { SectionHeader } from "@/components/section-header";

import { formatDate } from "@/lib/utils";
import { getBySlug, getCategories, getTags } from "@/lib/services/article";

import { SOCIAL_LINKS } from "@/lib/constants";

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
    <>
      <SectionHeader
        title={`${article.title}`}
        subtitle="Home / Article Details"
        className="bg-article"
      />
      <div className="container py-20 flex gap-12">
        <div className="flex-1 flex flex-col">
          <h2 className="h2 max-w-[500px] mb-5">{article.title}</h2>
          <div className="relative w-full h-[450px] rounded-3xl overflow-hidden mb-12">
            <Image
              src={article.image}
              alt={article.title}
              width={600}
              height={600}
              className="object-cover w-full h-auto"
            />
          </div>
          <div className="flex justify-between mb-12">
            <p className="text-lg">{formatDate(article.createdAt)}</p>
            <p className="capitalize text-lg">Author: {article.author}</p>
          </div>
          <p className="mb-12">{article.description}</p>
          <div className="w-full h-fit py-14 rounded-3xl overflow-hidden bg-accent-secondary">
            <RiDoubleQuotesL
              size={100}
              className="rotate-180 mx-auto text-accent mb-4"
            />
            <p className="h3 font-primary text-center italic text-accent">
              The details are not the details.
              <br /> They make the design.
            </p>
          </div>

          <div className="flex items-end justify-between py-11">
            <p className="text-lg">
              {article.tags.slice(0, -1).map((tag) => tag + " / ")}
              {article.tags.slice(-1)}
            </p>
            <Socials items={SOCIAL_LINKS} />
          </div>
          <ContactForm title="Leave a Reply" />
        </div>
        <Filter
          tags={tags}
          categories={categories}
          articleTags={article.tags}
        />
      </div>
    </>
  );
};

export default ArticlesDetails;
