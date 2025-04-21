import { cn } from "@/utils/classNameMerge";
import { projects } from "./works";
import ProjectCard from "./ProjectCard";

interface Props {
  className?: string;
}

const SelectedWorks = ({ className }: Props) => {
  return (
    <section
      id="work"
      className={cn("flex w-full flex-col items-center gap-[120px]", className)}
    >
      <div className="flex flex-col text-[60px] sm:text-[80px] leading-[48px] sm:leading-[64px] font-medium tracking-tighter items-center ">
        <span>SELECTED</span>
        <span>WORKS</span>
      </div>
      <div className="flex flex-col gap-[40px] items-start w-full ">
        {projects.map((project) => (
          <ProjectCard key={project.title} value={project} />
        ))}
      </div>
    </section>
  );
};

export default SelectedWorks;
