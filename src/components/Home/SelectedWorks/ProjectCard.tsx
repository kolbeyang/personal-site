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
        "transition-all duration-300 ease-in-out border-t border-bg-600/80 py-4 md:py-2 px-8 md:px-8 bg-white backdrop-blur-sm w-full flex flex-row gap-[24px]",
        "",
        className,
      )}
      style={style}
    >
      <div
        className={cn(
          "flex flex-col w-full h-[calc(100dvh-32px)] sticky top-4 gap-2",
          "sm:flex-row",
        )}
      >
        <a
          className="shrink-0 text-[24px] leading-[22px] md:text-[54px] font-semibold md:leading-[50px] tracking-tight flex-1 text-left  hover:underline decoration-[1px] md:decoration-[2px] h-fit"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </a>
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
      </div>
      <PhotoGallery project={value} />
    </div>
  );
};

export default ProjectCard;
