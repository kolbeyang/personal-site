import { links } from "@/links";
import { cn } from "@/utils/classNameMerge";
import { IconArrowUpRight } from "@tabler/icons-react";
import { motion } from "framer-motion";

interface Line {
  text: string;
  link: string;
}

const lines: Line[] = [
  {
    text: "I CODE",
    link: links.github,
  },
  {
    text: "DESIGN",
    link: links.dribbble,
  },
  {
    text: "WRITE",
    link: links.medium,
  },
  {
    text: "& DRAW",
    link: links.instagram,
  },
];

interface Props {
  className?: string;
}

const MainText = ({ className }: Props) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.3,
      },
    },
  };
  const lineVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "linear",
        duration: 0.05,
      },
    },
  };
  const textVariants = {};
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={cn(
        "flex flex-col items-end absolute w-full right-3 min-[440px]:right-[50%] min-[440px]:translate-x-[200px] top-[50%] -translate-y-[calc(50%+140px)] text-white text-[60px] sm:text-[60px] leading-[48px] sm:leading-[54px] tracking-tighter",
        className,
      )}
    >
      {lines.map(({ text, link }) => (
        <motion.a
          key={text}
          variants={lineVariants}
          href={link}
          target="_blank"
          className="group"
        >
          <motion.span
            className="group-hover:pr-[60px] transition-all duration-75 relative"
            variants={textVariants}
          >
            <div
              className={cn(
                "group-hover:flex hidden rounded-sm ring ring-inset ring-green-05/30 bg-green-03 absolute right-0 top-[50%] -translate-y-[50%] text-green-05 h-[48px] aspect-square items-center justify-center",
              )}
            >
              <IconArrowUpRight size={48} stroke={1} />
            </div>
            {text}
          </motion.span>
        </motion.a>
      ))}
    </motion.div>
  );
};

export default MainText;
