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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1,
        delay: 1.5,
      }}
      className={cn(
        "flex flex-col items-end absolute right-[50%] translate-x-[200px] top-[50%] -translate-y-[calc(50%+140px)] text-white text-[80px] leading-[70px] tracking-tighter",
        className,
      )}
    >
      {lines.map(({ text, link }) => (
        <motion.a
          key={text}
          initial={{ paddingRight: 0 }}
          href={link}
          className="relative group"
          target="_blank"
          whileHover="expand"
        >
          <motion.div
            className={cn(
              "group-hover:flex hidden rounded-sm ring ring-inset ring-green-05/30 bg-green-03 absolute right-0 top-[50%] -translate-y-[50%] text-green-05 h-[62px] aspect-square items-center justify-center",
            )}
          >
            <IconArrowUpRight size={60} stroke={1} />
          </motion.div>
          <motion.span
            initial={{ paddingRight: "0px" }}
            transition={{
              duration: 0.05,
            }}
            variants={{
              expand: {
                paddingRight: "72px",
                transition: {
                  duration: 0.05,
                },
              },
            }}
          >
            {text}
          </motion.span>
        </motion.a>
      ))}
    </motion.div>
  );
};

export default MainText;
