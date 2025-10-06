"use client";

import { cn } from "@/utils/classNameMerge";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import LogoContainer from "./LogoContainer";

const tools = ["FIGMA", "REACT", "RUST", "TYPESCRIPT", "PYTHON", "NEOVIM"];

export const svgPaths = [
  "/logos/figma.svg",
  "/logos/react.svg",
  "/logos/rust.svg",
  "/logos/typescript.svg",
  "/logos/python.svg",
  "/logos/neovim.svg",
];

interface Props {
  className?: string;
}
const Tools = ({ className }: Props) => {
  const ref = useRef(null);

  // Get the scroll percentage using useScroll hook
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const tool = useTransform(() => {
    const raw = scrollYProgress.get();
    const scaled = raw * (tools.length - 1);
    const rounded = Math.round(scaled);
    return tools.at(rounded)!;
  });

  return (
    <section
      className={cn(
        "h-[500px] flex text-[50px] sm:text-[60px] leading-[32px] sm:leading-[42px] justify-start gap-2 flex-col tracking-tighter items-end font-medium relative max-w-full",
        className,
      )}
    >
      <LogoContainer
        className="absolute left-[50%] bottom-[40%] -translate-x-1/2 translate-y-1/2 md:left-[-40px] md:bottom-[-40px] md:translate-x-0 md:translate-y-0 size-[450px] sm:size-[600px] w-full overflow-hidden"
        scrollYProgress={scrollYProgress}
      />
      <div className="flex flex-col items-end gap-2 h-full">
        <span>CAN&apos;T LIVE</span>
        <span>WITHOUT</span>
        <motion.div
          ref={ref}
          // h-full here for on scroll behavior, all logos need to be visible
          className="h-[50%]"
        >
          {tool}
        </motion.div>
      </div>
    </section>
  );
};

export default Tools;
