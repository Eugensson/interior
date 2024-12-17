"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import { Controlled as ControlledZoom } from "react-medium-image-zoom";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import { cn } from "@/lib/utils";

import "react-medium-image-zoom/dist/styles.css";
import { Search } from "lucide-react";

interface GalleryImagesProps {
  className?: string;
  images: string[];
}

export const GalleryImages = ({ images, className }: GalleryImagesProps) => {
  const [current, setCurrent] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleZoomChange = useCallback((shouldZoom: boolean) => {
    setIsZoomed(shouldZoom);
  }, []);

  if (!images.length) {
    return <p>No images available</p>;
  }

  return (
    <div
      className={cn(
        "flex flex-col gap-4 w-full max-w-[1200px] h-full max-h-[500px]",
        className
      )}
    >
      <ControlledZoom
        isZoomed={isZoomed}
        onZoomChange={handleZoomChange}
        classDialog="custom-zoom"
      >
        <div className="mx-auto relative w-full max-w-[600px] h-full max-h-[400px] rounded-3xl overflow-hidden">
          <Image
            priority
            src={
              images[current].trim()
                ? images[current].trim()
                : "/placeholder.png"
            }
            alt="Світлина продукції"
            aria-label="Світлина продукції"
            width={1200}
            height={800}
            className="object-cover object-center"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full flex justify-center items-center bg-white shadow-sm pointer-events-none">
            <Search size={30} className="text-accent pointer-events-none" />
          </div>
        </div>
      </ControlledZoom>
      <ScrollArea className="w-fit max-w-max mx-auto whitespace-nowrap">
        <ul className="flex justify-center w-max space-x-2 p-2 pb-3">
          {images.map((image, index) => (
            <li
              key={index}
              role="option"
              aria-selected={current === index}
              className={cn(
                "group relative border-2 mr-2 cursor-pointer hover:border-primary",
                current === index && "border-primary"
              )}
              onClick={() => setCurrent(index)}
            >
              <Image
                src={image.trim() ? image.trim() : "/placeholder.png"}
                width={50}
                height={50}
                alt="Project image"
                className="w-full h-full object-cover object-bottom aspect-square"
              />
              <div
                className={cn(
                  "absolute top-0 left-0 w-full h-full bg-black/65 group-hover:bg-transparent",
                  current === index && "bg-transparent"
                )}
              />
            </li>
          ))}
        </ul>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};
