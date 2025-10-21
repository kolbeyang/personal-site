import PeekaboButton from "@/components/ui/PeekaboButton";
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
  return (
    <motion.div
      className={cn(
        "flex flex-col items-end gap-0 h-full absolute right-5 top-5 sm:right-10 sm:top-10 text-primary-700",
        "text-[32px] sm:text-[60px] leading-[22px] sm:leading-[42px] tracking-tighter font-medium",
        className,
      )}
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
      {lines.map(({ text, link }) => (
        <PeekaboButton key={text} link={link}>
          {text}
        </PeekaboButton>
      ))}
    </motion.div>
  );
};

export default MainText;
