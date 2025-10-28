import { cn } from "@/utils/classNameMerge";
import { motion } from "framer-motion";
import { paths } from "./paths";

interface Props {
  className?: string;
  fill: string;
}

const KolbeYang = ({ className, fill }: Props) => {
  return (
    <motion.svg
      viewBox="0 0 1390 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-auto", className)}
    >
      {paths.map((path, i) => (
        <motion.path
          key={i}
          d={path}
          initial={{
            pathLength: 0,
            fill: "#FFFFFF00",
            stroke: "var(--color-primary-700)",
          }}
          whileInView={{
            pathLength: 1,
            fill: ["var(--color-green-03)", "#FFFFFF00", fill],
            stroke: [
              "var(--color-primary-700)",
              "var(--color-primary-700)",
              "var(--color-primary-700)",
              "#FFFFFF00",
            ],
            transition: {
              duration: 3,
            },
          }}
          strokeWidth={0.5}
        />
      ))}
    </motion.svg>
  );
};

export default KolbeYang;
