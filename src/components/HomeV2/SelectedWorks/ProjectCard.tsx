import { IconArrowUpRight, IconEye } from "@tabler/icons-react";
import { Project } from "./types";
import { useState } from "react";
import Expandable from "./Expandable";
import { cn } from "@/utils/classNameMerge";
import Button from "@/components/ui/Button";

interface Props {
  value: Project;
}

const ProjectCard = ({ value }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const { title, link } = value;
  const buttonClassName =
    "rounded-md ring ring-inset size-[50px] sm:size-[60px] flex justify-center items-center";
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex justify-between w-full item-center px-2 sm:px-5">
        <span className=" text-[30px] sm:text-[40px] font-medium tracking-tighter">
          {title.toUpperCase()}
        </span>
        <span className="flex gap-1">
          <Button
            className={cn(buttonClassName)}
            onClick={() => setIsOpen((p) => !p)}
          >
            <IconEye className="size-[40px] sm:size-[48px]" stroke={1} />
          </Button>
          <Button
            className={cn(buttonClassName)}
            onClick={() => window.open(link, "_blank")}
          >
            <IconArrowUpRight
              className="size-[40px] sm:size-[48px]"
              stroke={1}
            />
          </Button>
        </span>
      </div>
      <Expandable isOpen={isOpen} project={value} />
    </div>
  );
};

export default ProjectCard;
