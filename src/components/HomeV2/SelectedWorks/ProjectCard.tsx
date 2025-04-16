import { IconArrowUpRight, IconEye } from "@tabler/icons-react";
import { Project } from "./types";
import { useState } from "react";
import ImageGallery from "./ImageGallery";
import { cn } from "@/utils/classNameMerge";
import Button from "@/components/ui/Button";

interface Props {
  value: Project;
}

const ProjectCard = ({ value }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const { title, imagePaths } = value;
  const buttonClassName =
    "rounded-md ring ring-inset size-[60px] flex justify-center items-center";
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex justify-between w-full item-center">
        <span className="text-[36px] font-medium">{title.toUpperCase()}</span>
        <span className="flex gap-1">
          <Button
            className={cn(buttonClassName)}
            onClick={() => setIsOpen((p) => !p)}
          >
            <IconEye size={48} stroke={1} />
          </Button>
          <Button
            className={cn(buttonClassName)}
            onClick={() => setIsOpen((p) => !p)}
          >
            <IconArrowUpRight size={48} stroke={1} />
          </Button>
        </span>
      </div>
      <ImageGallery isOpen={isOpen} imagePaths={imagePaths} />
    </div>
  );
};

export default ProjectCard;
