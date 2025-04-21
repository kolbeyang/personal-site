"use client";
import { cn } from "@/utils/classNameMerge";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import HeaderButton from "./HeaderButton";

interface Props {
  className?: string;
}

const Header = ({ className }: Props) => {
  const { scrollY } = useScroll();
  const [isScrollDown, setIsScrollDown] = useState<boolean>(false);
  const [isPastFirstPage, setIsPastFirstPage] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (current: number) => {
    const diff = current - (scrollY.getPrevious() ?? 0);
    setIsScrollDown(diff > 1);
    setIsPastFirstPage(current > 1000);
  });

  return (
    <motion.header
      className={cn(
        "px-2 sm:px-5 py-1 w-screen flex justify-between text-sm font-semibold",
        className,
      )}
      initial={{ top: 0 }}
      animate={{
        top: isScrollDown ? -40 : 0,
        color: isPastFirstPage ? "var(--color-text-base)" : "white",
      }}
      transition={{
        duration: 0.2,
      }}
    >
      <span className="py-[2px] px-1">KOLBE YANG</span>
      <span className="flex sm:gap-1">
        <HeaderButton href="#work">WORK</HeaderButton>
        <HeaderButton href="#socials">SOCIALS</HeaderButton>
        <HeaderButton href="#contact">CONTACT</HeaderButton>
      </span>
    </motion.header>
  );
};

export default Header;
