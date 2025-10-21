import { cn } from "@/utils/classNameMerge";
import FolderTab from "./FolderTab";
import ProjectCard from "./ProjectCard";
import { projects } from "./works";
import { Fragment } from "react";
import { motion } from "framer-motion";

interface Props {
  className?: string;
}

const SelectedWorks = ({ className }: Props) => {
  return (
    <div className={cn("", className)}>
      <FolderTab
        className={cn("w-[132px] h-[22px]", "sm:w-[360px] sm:h-[60px]")}
      />
      <div
        className={cn(
          "w-full bg-white p-[12px] text-center text-[24px] tracking-tighter",
          "sm:p-[20px] sm:text-[60px] items-start",
        )}
      >
        SELECTED WORKS
      </div>
      <div className="bg-white">
        {projects.map((project) => (
          <Fragment key={project.title}>
            <motion.div
              className="border-t"
              initial={{ borderColor: "var(--color-green-03)", width: "0%" }}
              whileInView={{
                borderColor: "var(--color-primary-500)",
                width: "100%",
              }}
              viewport={{ once: false, amount: 1 }}
              transition={{
                duration: 1,
              }}
            />
            <ProjectCard value={project} className={cn("")} />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default SelectedWorks;
