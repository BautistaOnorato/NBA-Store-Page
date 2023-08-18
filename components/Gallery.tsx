"use client";

import { cn } from "@/lib/utils";
import { Image as ImageType } from "@/models/models";
import Image from "next/image";
import { useState } from "react";

interface GalleryProps {
  images: ImageType[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [selected, setSelected] = useState(0);

  const handleImage = (index: number) => {
    setSelected(index);
  };

  return (
    <div className="flex flex-col h-[50vh] sm:h-[100vh] gap-8">
      <div className="rounded-md w-full h-full relative inset-0 overflow-hidden p-4">
        <Image
          src={images[selected].url}
          alt="Image"
          fill
          className="object-contain object-center"
        />
      </div>
      <div className="flex gap-4">
        {images.map((image, index) => (
          <div
            key={image.id}
            onClick={() => handleImage(index)}
            className={cn(
              "inset-0 rounded-md ring-2 ring-offset-2 cursor-pointer p-2",
              selected === index ? "ring-black" : "ring-transparent"
            )}
          >
            <Image src={image.url} alt="image" width={100} height={100} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
