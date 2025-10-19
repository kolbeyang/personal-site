import { cn } from "@/utils/classNameMerge";
import FolderTab from "./FolderTab";
import ProjectCard from "./ProjectCard";
import { projects } from "./works";

interface Props {
  className?: string;
}

const SelectedWorks = ({ className }: Props) => {
  return (
    <div className={cn("items-start", className)}>
      <FolderTab
        className={cn("w-[132px] h-[22px]", "sm:w-[360px] sm:h-[60px]")}
      />
      <div
        className={cn(
          "w-full bg-white p-[12px] text-center text-[24px] tracking-tighter",
          "sm:p-[20px] sm:text-[60px]",
        )}
      >
        SELECTED WORKS
      </div>
      {projects.map((project) => (
        <ProjectCard key={project.title} value={project} className={cn("")} />
      ))}
    </div>
  );
};

export default SelectedWorks;
