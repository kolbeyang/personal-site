import { cn } from "@/utils/classNameMerge";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { paths } from "./paths";

interface Props {
  className?: string;
  fill: string;
}

const KolbeYang = ({ className, fill }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.3,
  });

  const pathVariants = {
    hidden: {
      pathLength: 0,
      fill: "#FFFFFF00",
      stroke: "var(--color-primary-700)",
      strokeWidth: 2,
    },
    visible: {
      pathLength: 1,
      fill: [
        "var(--color-green-03)",
        "#FFFFFF00",
        "#FFFFFF00",
        "#FFFFFF00",
        fill,
      ],
      stroke: [
        "var(--color-green-03)",
        "var(--color-primary-700)",
        "var(--color-primary-700)",
        "#FFFFFF00",
      ],
      strokeWidth: 1,
      transition: {
        duration: 2,
        fill: {
          duration: 2,
        },
        stroke: {
          duration: 3,
        },
        strokeWidth: {
          duration: 2,
          ease: "easeOut",
        },
      },
    },
  };

  return (
    <motion.svg
      ref={ref}
      viewBox="0 0 1390 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-auto", className)}
    >
      {paths.map((path, i) => (
        <motion.path
          key={i}
          d={path}
          variants={pathVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        />
      ))}
    </motion.svg>
  );
};

export default KolbeYang;
