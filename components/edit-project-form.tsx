"use client";

import useSWR from "swr";
import Image from "next/image";
import { useForm } from "react-hook-form";
import useSWRMutation from "swr/mutation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Ban, ImageIcon, Loader, RefreshCw, X } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { FormInput } from "@/components/form-input";

import { fetcher } from "@/lib/utils";
import { Project } from "@/lib/models/project-model";

import { useToast } from "@/hooks/use-toast";

interface EditProjectFormProps {
  id: string;
  designers: string[];
  categories: string[];
}

export const EditProjectForm = ({
  id,
  designers,
  categories,
}: EditProjectFormProps) => {
  const router = useRouter();
  const { toast } = useToast();
  const { data: project, error } = useSWR(`/api/admin/projects/${id}`, fetcher);
  const { trigger: updateProject, isMutating: isUpdating } = useSWRMutation<
    void,
    unknown,
    `/api/admin/projects/${string}`,
    Project
  >(`/api/admin/projects/${id}`, async (url, { arg }: { arg: Project }) => {
    const res = await fetch(`${url}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(arg),
    });

    if (!res.ok) {
      const data = await res.json();
      toast({
        title: data.message || "Failed to update project",
        variant: "destructive",
      });
      return;
    }

    toast({ title: "Project updated" });
    router.push("/admin/projects");
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
  } = useForm<Project>();

  const [selectedDesigner, setSelectedDesigner] = useState<string>(
    project?.designer.trim().toLowerCase() || ""
  );
  const [selectedCategory, setSelectedCategory] = useState<string>(
    project?.category.trim().toLowerCase() || ""
  );

  useEffect(() => {
    if (project) {
      setValue("title", project.title);
      setValue("description", project.description);
      setValue("tags", project.tags);
      setValue("category", project.category);
      setValue("images", project.images);
      setValue("designer", project.designer);
      setSelectedDesigner(selectedDesigner.trim().toLowerCase());
      setSelectedCategory(selectedCategory.trim().toLowerCase());
    }
  }, [project, selectedCategory, selectedDesigner, setValue]);

  const formSubmit = async (formData: Project) => {
    await updateProject(formData);
  };

  const handleImagesUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newImages = [...getValues("images")];

    try {
      const resSign = await fetch("/api/cloudinary-signin", { method: "POST" });
      if (!resSign.ok) throw new Error("Failed to get Cloudinary signature");

      const { signature, timestamp } = await resSign.json();
      const files = e.target.files;

      if (!files || files.length === 0) {
        toast({ title: "No files selected", variant: "destructive" });
        return;
      }

      if (files.length + newImages.length > 10) {
        toast({
          title: "You can upload a maximum of 10 images",
          variant: "destructive",
        });
        return;
      }

      const uploads = Array.from(files).map(async (file) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("signature", signature);
        formData.append("timestamp", timestamp);
        formData.append(
          "api_key",
          process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY || ""
        );

        const res = await fetch(
          `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`,
          {
            method: "POST",
            body: formData,
          }
        );

        if (!res.ok) throw new Error("Failed to upload image");

        const data = await res.json();
        return data.secure_url;
      });

      const uploadedImages = await Promise.all(uploads);
      setValue("images", [...newImages, ...uploadedImages]);
      toast({ title: "Images uploaded" });
    } catch (error) {
      toast({
        title: error instanceof Error ? error.message : "Error uploading files",
        variant: "destructive",
      });
    }
  };

  if (error) return <p>{error.message || "Failed to load project data"}</p>;

  if (!project) return <Loader className="animate-spin" />;

  return (
    <Card className="w-full h-fit max-w-xl">
      <CardHeader className="w-full">
        <CardTitle className="text-center mb-4">Edit Project</CardTitle>
        <CardDescription className="flex items-center justify-between">
          ProjectID <p>{id}</p>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(formSubmit)} className="space-y-6">
          <FormInput
            name="Title"
            id="title"
            required
            register={register}
            errors={errors.title}
          />
          <div className="flex items-end gap-4">
            <FormInput
              name="Designer"
              id="designer"
              required
              register={register}
              errors={errors.title}
              className="flex-1"
            />
            <Select
              disabled={isUpdating}
              name="designer"
              defaultValue={selectedDesigner}
              onValueChange={(value) => {
                setSelectedDesigner(value);
                setValue("designer", value);
              }}
            >
              <SelectTrigger className="flex-1">
                <SelectValue placeholder="Select a designer" />
              </SelectTrigger>
              <SelectContent>
                {designers.length > 0 ? (
                  designers.map((designer) => (
                    <SelectItem key={designer} value={designer}>
                      {designer}
                    </SelectItem>
                  ))
                ) : (
                  <SelectItem value="" disabled>
                    No designers available
                  </SelectItem>
                )}
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-end gap-4">
            <FormInput
              name="Category"
              id="category"
              required
              register={register}
              errors={errors.title}
              className="flex-1 capitalize"
            />
            <Select
              disabled={isUpdating}
              name="category"
              defaultValue={selectedCategory}
              onValueChange={(value) => {
                setSelectedCategory(value);
                setValue("category", value);
              }}
            >
              <SelectTrigger className="flex-1">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {categories.length > 0 ? (
                  categories.map((category) => (
                    <SelectItem
                      key={category}
                      value={category}
                      className="capitalize"
                    >
                      {category}
                    </SelectItem>
                  ))
                ) : (
                  <SelectItem value="" disabled>
                    No categories available
                  </SelectItem>
                )}
              </SelectContent>
            </Select>
          </div>
          <FormInput
            name="Tags"
            id="tags"
            required
            register={register}
            errors={errors.tags}
          />
          <div className="space-y-2">
            <Label htmlFor="images">Вибрані зображення</Label>
            <div className="flex gap-2">
              {getValues("images")?.map((imageUrl: string, index: number) => (
                <div key={index} className="relative">
                  <Image
                    width={80}
                    height={80}
                    src={imageUrl}
                    alt={`image-${index}`}
                    className="object-cover aspect-square"
                  />
                  <Button
                    size="icon"
                    type="button"
                    variant="secondary"
                    className="p-0 w-6 h-6 absolute top-0 right-0 rounded-none text-muted-foreground hover:text-primary"
                    onClick={() => {
                      const updatedImages = getValues("images").filter(
                        (_, i) => i !== index
                      );
                      setValue("images", updatedImages as ["string"]);
                    }}
                  >
                    <X />
                  </Button>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-end gap-2">
            <Label className="cursor-pointer" htmlFor="imageFile">
              <ImageIcon className="size-10 opacity-80 hover:opacity-100 transition-opacity duration-300" />
              <input
                multiple
                type="file"
                className="sr-only"
                id="imageFile"
                onChange={handleImagesUpload}
              />
            </Label>
          </div>
          <FormInput
            name="Description"
            id="description"
            required
            type="textarea"
            register={register}
            errors={errors.description}
          />
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              type="button"
              onClick={() => router.push("/admin/projects")}
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
      </CardContent>
    </Card>
  );
};
