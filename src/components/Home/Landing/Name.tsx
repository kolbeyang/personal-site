import { cn } from "@/utils/classNameMerge";
import { motion } from "framer-motion";
import InverseRounded from "./InverseRounded";

interface Props {
  className?: string;
}

const Name = ({ className }: Props) => {
  return (
    <motion.div
      variants={{
        initial: {},
        animate: {},
      }}
      initial="initial"
      animate="animate"
      className={cn("z-10 relative", className)}
    >
      <motion.div
        variants={{
          initial: { translateX: "-50%", color: "transparent" },
          animate: {
            translateX: "0px",
            color: "var(--color-primary-700)",
            transition: {
              duration: 0.2,
              ease: "easeOut",
            },
          },
        }}
        initial="initial"
        animate="animate"
        className={cn(
          "flex bg-primary-100 tracking-wider rounded-br-[16px] z-20 relative",
          "text-[12px] pt-1 pl-1 pr-4 pb-2 ",
          "sm:text-[18px] sm:pt-1 sm:pl-2 sm:pr-6 sm:pb-3 ",
        )}
      >
        KOLBE YANG
        <InverseRounded
          fill="var(--color-primary-100)"
          className="absolute right-[-20px] top-0"
        />
      </motion.div>
      <InverseRounded
        fill="var(--color-primary-100)"
        className="absolute bottom-[-20px] left-0"
      />
    </motion.div>
  );
};

export default Name;
