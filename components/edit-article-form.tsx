"use client";

import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm, ValidationRule } from "react-hook-form";
import { Ban, ImageIcon, Loader, RefreshCw } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import { useToast } from "@/hooks/use-toast";

import { cn, fetcher } from "@/lib/utils";
import { Article } from "@/lib/models/article-model";

interface EditArticleFormProps {
  id: string;
  authors: string[];
  categories: string[];
}

export const EditArticleForm = ({
  id,
  authors,
  categories,
}: EditArticleFormProps) => {
  const router = useRouter();
  const { toast } = useToast();
  const { data: article, error } = useSWR(`/api/admin/articles/${id}`, fetcher);

  const { trigger: updateArticle, isMutating: isUpdating } = useSWRMutation(
    `/api/admin/articles/${id}`,
    async (url, { arg }) => {
      const res = await fetch(`${url}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(arg),
      });
      const data = await res.json();

      if (!res.ok) {
        toast({
          title: data.message,
          variant: "destructive",
        });
        return;
      }

      toast({ title: "Article updated" });
      router.push("/admin/articles");
    }
  );
  const [selectedAuthor, setSelectedAuthor] = useState<string>(
    article?.author.trim().toLowerCase() || ""
  );
  const [selectedCategory, setSelectedCategory] = useState<string>(
    article?.category.trim().toLowerCase() || ""
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<Article>();

  useEffect(() => {
    if (!article) return;
    setValue("title", article.title);
    setValue("description", article.description);
    setValue("tags", article.tags);
    setValue("category", article.category);
    setValue("image", article.image);
    setValue("author", article.author);
  }, [article, setValue]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const formSubmit = async (formData: any) => {
    console.log("WORK");

    await updateArticle(formData);
  };

  if (error) return error.message;

  if (!article) return <Loader className="animate-spin" />;

  const FormInput = ({
    id,
    name,
    required,
    pattern,
    className,
  }: {
    id: keyof Article;
    name: string;
    required?: boolean;
    pattern?: ValidationRule<RegExp>;
    className?: string;
  }) => (
    <Label htmlFor={id} className={cn("w-full flex flex-col", className)}>
      {errors[id]?.message ? (
        <span className="text-red-500">{errors[id]?.message}</span>
      ) : (
        name
      )}

      {name === "Description" ? (
        <Textarea
          id={id}
          {...register(id, {
            required: required && `${name} is required`,
          })}
          rows={4}
        />
      ) : (
        <Input
          type="text"
          id={id}
          {...register(id, {
            required: required && `${name} is required`,
            pattern,
          })}
        />
      )}
    </Label>
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const uploadHandler = async (e: any) => {
    const toastId = toast({ title: "Uploading image..." });

    try {
      const resSign = await fetch("/api/cloudinary-signin", { method: "POST" });
      const { signature, timestamp } = await resSign.json();

      const file = e.target.files[0];

      const formData = new FormData();

      formData.append("file", file);
      formData.append("signature", signature);
      formData.append("timestamp", timestamp);
      formData.append("api_key", process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY!);
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();
      setValue("image", data.secure_url);
      toast({ title: "File uploaded successfully", description: `${toastId}` });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      toast({
        title: `${err.message}`,
        description: `${toastId}`,
        variant: "destructive",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(formSubmit)}
      className="w-full max-w-md space-y-4"
    >
      <FormInput name="Title" id="title" required />
      <div className="flex gap-2">
        <div className="flex-1 flex flex-col gap-4">
          <FormInput name="Author" id="author" required />
          <Select
            disabled={isUpdating}
            name="author"
            required
            value={selectedAuthor}
            onValueChange={(value) => setSelectedAuthor(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select author" />
            </SelectTrigger>
            <SelectContent>
              {authors?.map((author: string) => (
                <SelectItem key={author} value={author}>
                  {author}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <FormInput name="Category" id="category" required />
          <Select
            disabled={isUpdating}
            name="category"
            required
            value={selectedCategory}
            onValueChange={(value) => setSelectedCategory(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories?.map((category: string) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex items-end gap-2">
        <FormInput name="Tags" id="tags" required />
        <FormInput name="Image" id="image" required className="sr-only" />
        <Label className="cursor-pointer" htmlFor="imageFile">
          <ImageIcon className="size-10 opacity-80 hover:opacity-100 transition-opacity duration-300 " />
          <input
            type="file"
            className="sr-only"
            id="imageFile"
            onChange={uploadHandler}
          />
        </Label>
      </div>

      <FormInput name="Description" id="description" required />

      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          type="button"
          onClick={() => router.push("/admin/articles")}
          className="flex-1"
        >
          <Ban />
          Cancel
        </Button>
        <Button type="submit" disabled={isUpdating} className="flex-1">
          {isUpdating ? <Loader className="animate-spin" /> : <RefreshCw />}
          Edit
        </Button>
      </div>
    </form>
  );
};
