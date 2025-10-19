import Button from "@/components/ui/Button";
import { cn } from "@/utils/classNameMerge";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { useState } from "react";
import { Project } from "./types";

interface Props {
  project: Project;
}

const PhotoGallery = ({ project }: Props) => {
  const { imagePaths, title } = project;

  return (
    <div className={cn("w-full max-w-[600px] relative flex flex-col gap-2")}>
      {imagePaths.map((imagePath) => (
        <img
          key={imagePath}
          src={imagePath}
          alt={title}
          className="w-fill object-cover h-auto rounded-md"
        />
      ))}
    </div>
  );
};

export default PhotoGallery;
