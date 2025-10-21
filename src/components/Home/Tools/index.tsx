"use client";

import { cn } from "@/utils/classNameMerge";

import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
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
  const [currentIndex, setCurrentIndex] = useState(0);

  // Get the scroll percentage using useScroll hook
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const toolIndex = useTransform(() => {
    const raw = scrollYProgress.get();
    const scaled = raw * (tools.length - 1);
    const rounded = Math.round(scaled);
    return rounded;
  });

  useMotionValueEvent(toolIndex, "change", (latest) => {
    setCurrentIndex(latest);
  });

  return (
    <section
      ref={ref}
      className={cn(
        "h-[3000px] text-[32px] sm:text-[60px] leading-[22px] sm:leading-[42px]  gap-2 tracking-tighter font-medium relative w-full max-w-full",
        className,
      )}
    >
      <div className="w-full h-dvh sticky top-0 oveflow-hidden p-[20px] sm:p-[40px]">
        <div className="size-full bg-primary-200 overflow-hidden rounded-[24px] relative">
          <LogoContainer
            className={cn(
              "absolute bottom-[-200px] left-[50%] -translate-x-1/2 aspect-square overflow-hidden size-[600px]",
              "sm:bottom-[-300px] sm:left-[-200px] md:translate-x-0 md:translate-y-0  sm:size-[1000px] ",
            )}
            scrollYProgress={scrollYProgress}
          />
          <div className="flex flex-col items-end gap-2 h-full absolute right-5 top-5 sm:right-10 sm:top-10">
            <span>CAN&apos;T LIVE</span>
            <span>WITHOUT</span>
            {tools.map((tool, i) => (
              <span
                key={tool}
                className={cn("text-primary-500", {
                  "text-primary-700": currentIndex === i,
                })}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
