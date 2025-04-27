import { cn } from "@/utils/classNameMerge";
import { easeInOut, motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "./works";

interface Props {
  className?: string;
  children: ReactNode;
}

const SelectedWorks = ({ className, children }: Props) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Only start color change after reaching the top (0 position)
  const headerColor = useTransform(
    scrollYProgress,
    [0, 0.08, 0.1, 1], // Start color change slightly after hitting the top
    ["#FFFFFF00", "#FFFFFF00", "#FFFFFF", "#FFFFFF"], // Keep white until 0.1 progress
    { ease: easeInOut },
  );
  return (
    <div className={cn("mx-auto w-full", className)} ref={ref}>
      {/* Header - will stick at the top */}
      <motion.div
        id="work"
        className="sticky h-[200px] top-0 pt-[30px] md:pt-[20px] flex flex-col text-[54px] sm:text-[80px] leading-[44px] sm:leading-[64px] font-medium tracking-tighter items-center"
        style={{ backgroundColor: headerColor }}
      >
        <span>SELECTED</span>
        <span>WORKS</span>
      </motion.div>
      ,{/* Project sections */}
      {projects.map((project, index) => (
        <div
          key={project.title}
          className="sticky w-full top-[140px] md:top-[160px]"
          style={{ paddingTop: index * 6 }}
        >
          <ProjectCard value={project} className={cn("")} />
        </div>
      ))}
      <div
        className={cn(
          "sticky transition-all duration-300 ease-in-out border-t border-bg-600/80 bg-bg-100 backdrop-blur-sm w-full flex justify-center h-screen items-center",
        )}
        style={{ top: projects.length * 6 + 180 }}
      >
        {children}
      </div>
    </div>
  );
};

export default SelectedWorks;
