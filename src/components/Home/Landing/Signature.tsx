import { motion } from "framer-motion";
import { signaturePaths } from "./signature-paths";

interface Props {
  stroke?: string;
}

const Signature = ({ stroke }: Props) => {
  return (
    <motion.svg
      width="206"
      height="86"
      viewBox="0 0 206 86"
      initial="initial"
      animate="animate"
      transition={{
        duration: 2,
        staggerChildren: 0.18,
      }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {signaturePaths.map((path) => (
        <motion.path
          key={path}
          d={path}
          variants={{
            initial: {
              pathLength: 0,
              strokeLinecap: "butt",
            },
            animate: {
              pathLength: 1,
              strokeLinecap: "round",
            },
          }}
          transition={{ duration: 0.2, ease: "easeIn" }}
          stroke={stroke ?? "black"}
          strokeWidth="3"
        />
      ))}
    </motion.svg>
  );
};

export default Signature;
