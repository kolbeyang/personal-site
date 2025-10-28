import { cn } from "@/utils/classNameMerge";
import { CSSProperties, useMemo, useRef } from "react";
import PhotoGallery from "./PhotoGallery";
import { Project } from "./types";
import FolderTab from "./FolderTab";
import { motion, useScroll, useTransform } from "framer-motion";

interface Props {
  value: Project;
  className?: string;
  style?: CSSProperties;
  fadeBackgroundOnScroll?: boolean;
}

const ProjectCard = ({
  value,
  className,
  style,
  fadeBackgroundOnScroll = true,
}: Props) => {
  const ref = useRef(null);

  const { title, link, description, tools } = value;
  const toolsString = useMemo(() => tools.join(", "), [tools]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "end start"],
  });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0.1, 0.9],
    ["white", "var(--color-primary-100)"], // green to red
  );

  return (
    <motion.div
      ref={ref}
      className={cn(
        "transition-all duration-300 ease-in-out  bg-white backdrop-blur-sm w-full flex relative",
        "flex-col-reverse border-b border-b-primary-500",
        "sm:flex-row sm:gap-[24px] sm:border-none",
        className,
      )}
      style={{
        ...(fadeBackgroundOnScroll ? { backgroundColor } : {}),
        ...style,
      }}
    >
      <FolderTab
        className={cn(
          "top-0 -translate-y-full",
          "w-[132px] h-[22px] hidden",
          "sm:w-[360px] sm:h-[60px] sm:absolute sm:block",
        )}
      />
      <div
        className={cn(
          "flex flex-col w-full sticky top-4 gap-2",
          "gap-2 px-4 py-2",
          "sm:flex-row sm:h-[calc(100dvh-32px)]  sm:pl-10 sm:pr-6 sm:py-6",
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
        <div className="flex h-full flex-col justify-between gap-6 md:flex-1">
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
    </motion.div>
  );
};

export default ProjectCard;
