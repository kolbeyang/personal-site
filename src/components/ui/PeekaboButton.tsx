import { cn } from "@/utils/classNameMerge";
import { IconArrowUpRight } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  link?: string;
  children?: ReactNode;
  className?: string;
}

const buttonVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const revealVariants = {
  initial: {
    width: "0%",
    opacity: 1,
    height: "40px",
  },
  animate: {
    width: ["0px", "80%", "140%"],
    opacity: [1, 1, 0],
    height: ["100%", "100%", "0px"],
    transition: {
      duration: 0.3,
    },
  },
};

const textVariants = {
  initial: {
    translateY: "140%",
  },
  animate: {
    translateY: "0px",
    transition: {
      duration: 0.1,
    },
  },
};

const PeekaboButton = ({ link, children, className }: Props) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      variants={buttonVariants}
      className={cn(
        "flex items-center group gap-0 select-none relative overflow-hidden",
        "transition-all duration-50",
        "hover:gap-[12px]",
        "text-[32px] h-[28px]",
        "sm:text-[60px] sm:h-[50px]",
        className,
      )}
    >
      <motion.div
        variants={revealVariants}
        className="absolute bottom-0 right-0 bg-green-03"
      />
      <motion.span variants={textVariants}>{children}</motion.span>
      <motion.div
        variants={textVariants}
        className={cn(
          "relative shrink-0 group-hover:bg-green-03 h-full aspect-square outline-primary-500 rounded-[4px] -outline-offset-1",
          "group-hover:outline-1",
        )}
      >
        <IconArrowUpRight
          stroke={0.75}
          className={cn(
            "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ",
            "transition-all duration-50",
            "sm:size-[80px] group-hover:sm:size-[60px] ",
          )}
        />
      </motion.div>
    </motion.a>
  );
};

export default PeekaboButton;
