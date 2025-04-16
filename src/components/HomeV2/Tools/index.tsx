"use client";

import { cn } from "@/utils/classNameMerge";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const tools = [
  "ILLUSTRATOR",
  "PHOTOSHOP",
  "NEOVIM",
  "REACT",
  "NEXT.JS",
  "TAILWINDCSS",
  "PROCREATE",
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

  const Tools = useTransform(() => {
    const raw = scrollYProgress.get();
    const scaled = Math.round(raw * (tools.length - 1));
    const rounded = Math.round(scaled);
    return tools.at(rounded)!;
  });

  return (
    <section
      className={cn(
        "flex text-[60px] leading-[42px] justify-center gap-2 flex-col tracking-tighter items-end font-medium ",
        className,
      )}
    >
      <span>CAN&apos;T LIVE</span>
      <span>WITHOUT</span>
      <motion.span ref={ref}>{Tools}</motion.span>
    </section>
  );
};

export default Tools;
