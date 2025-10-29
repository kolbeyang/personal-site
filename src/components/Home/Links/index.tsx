"use client";

import { cn } from "@/utils/classNameMerge";

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";
import LogoContainer from "./LogoContainer";
import PeekaboButton from "@/components/ui/PeekaboButton";
import { links } from "@/links";

interface Line {
  text: string;
  link: string;
  path: string;
}

const lines: Line[] = [
  {
    text: "GITHUB",
    link: links.github,
    path: "/logos/github.svg",
  },
  {
    text: "DRIBBBLE",
    link: links.dribbble,
    path: "/logos/dribbble.svg",
  },
  {
    text: "MEDIUM",
    link: links.medium,
    path: "/logos/medium.svg",
  },
  {
    text: "INSTAGRAM",
    link: links.instagram,
    path: "/logos/instagram.svg",
  },
  {
    text: "LINKEDIN",
    link: links.linkedin,
    path: "/logos/linkedin.svg",
  },
];

export const svgPaths = lines.map((line) => line.path);

interface Props {
  className?: string;
}

const Links = ({ className }: Props) => {
  const ref = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Get the scroll percentage using useScroll hook
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const toolIndex = useTransform(() => {
    const raw = scrollYProgress.get();
    const scaled = raw * (lines.length - 1);
    const rounded = Math.round(scaled);
    return rounded;
  });

  useMotionValueEvent(toolIndex, "change", (latest) => {
    setCurrentIndex(latest);
  });

  return (
    <section
      id="links"
      ref={ref}
      className={cn(
        "h-[2000px] text-[32px] sm:text-[60px] leading-[22px] sm:leading-[42px]  gap-2 tracking-tighter font-medium relative w-full max-w-full",
        className,
      )}
    >
      <div className="w-full h-dvh sticky top-0 oveflow-hidden p-[20px] sm:p-[40px]">
        <div className="size-full bg-primary-200 overflow-hidden rounded-[24px] relative">
          <LogoContainer
            className={cn(
              "absolute bottom-[-200px] left-[50%] -translate-x-1/2 aspect-square overflow-hidden size-[calc(100%+200px)]",
              "sm:bottom-[-200px] sm:left-[-40%] md:translate-x-0 md:translate-y-0  sm:size-[100%+200px] ",
            )}
            scrollYProgress={scrollYProgress}
          />
          <motion.div
            className="flex flex-col items-end gap-0 h-full absolute right-5 top-5 sm:right-10 sm:top-10"
            variants={{
              initial: {},
              animate: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            initial="initial"
            whileInView="animate"
          >
            <span className="h-[28px] sm:h-[50px]">ELSEWHERE</span>
            <span className="h-[28px] sm:h-[50px]">ONLINE</span>
            {lines.map(({ text, link }, i) => (
              <PeekaboButton
                key={text}
                link={link}
                className={cn("text-primary-500", {
                  "text-primary-700": currentIndex === i,
                })}
              >
                {text}
              </PeekaboButton>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Links;
