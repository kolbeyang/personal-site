import { cn } from "@/utils/classNameMerge";
import { CSSProperties, useMemo } from "react";
import PhotoGallery from "./PhotoGallery";
import { Project } from "./types";

interface Props {
  value: Project;
  className?: string;
  style?: CSSProperties;
}

const ProjectCard = ({ value, className, style }: Props) => {
  const { title, link, description, tools } = value;
  const toolsString = useMemo(() => tools.join(", "), [tools]);

  return (
    <div
      className={cn(
        "transition-all duration-300 ease-in-out border-t border-bg-600/80 pt-4 md:pt-2 px-6 md:px-4 pb-[100px] bg-white backdrop-blur-sm w-full",
        "flex flex-col gap-5 md:gap-5 md:flex-row",
        className,
      )}
      style={style}
    >
      <PhotoGallery project={value} />

      <div className="flex-1 flex flex-col-reverse gap-[12px] md:gap-[12px] md:flex-row w-full">
        <div className="flex h-full flex-col justify-between gap-2 md:flex-1">
          <span className="md:text-[18px] text-[12px] leading-[14px] md:leading-[22px] whitespace-pre-line space-y-2">
            {description.split("\n").map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </span>
          <span className="text-[14px] md:text-lg font-semibold">
            {toolsString}
          </span>
        </div>
        <a
          className="shrink-0 text-[24px] leading-[22px] md:text-[54px] font-semibold md:leading-[50px] tracking-tight flex-1 text-left md:text-right hover:underline decoration-[1px] md:decoration-[2px] h-fit"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
