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
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const incrementImage = (num: number) => {
    setSelectedImageIndex((p) => {
      const updated = (p + num + imagePaths.length) % imagePaths.length;
      console.log(updated);
      return updated;
    });
  };

  return (
    <div className={cn("w-full max-w-[600px] relative")}>
      <img
        src={imagePaths[selectedImageIndex]}
        alt={title}
        className="w-fill object-cover h-auto rounded-md"
      />
      <div className="absolute bottom-0 left-0 flex gap-1 w-full justify-between p-1">
        <Button
          className="p-4 md:p-[10] ring-white text-white bg-white/40 hover:bg-white hover:text-text-base"
          onClick={() => incrementImage(-1)}
        >
          <IconArrowLeft className="size-[40px] md:size-[60px]" stroke={0.5} />
        </Button>
        <Button
          className="p-4 md:p-[10] ring-white text-white bg-white/40 hover:bg-white hover:text-text-base"
          onClick={() => incrementImage(1)}
        >
          <IconArrowRight className="size-[40px] md:size-[60px]" stroke={0.5} />
        </Button>
      </div>
    </div>
  );
};

export default PhotoGallery;
