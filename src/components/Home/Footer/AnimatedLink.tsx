import { motion } from "framer-motion";
import { cn } from "@/utils/classNameMerge";
import { ComponentPropsWithoutRef } from "react";

interface AnimatedLinkProps extends ComponentPropsWithoutRef<typeof motion.a> {
  children: React.ReactNode;
}

const AnimatedLink = ({ children, className, ...props }: AnimatedLinkProps) => {
  const linkVariants = {
    initial: {},
    hover: {},
  };

  const highlightVariants = {
    initial: { width: 0 },
    hover: { width: "100%" },
  };

  return (
    <motion.a
      className={cn("relative inline-block overflow-hidden", className)}
      variants={linkVariants}
      initial="initial"
      whileHover="hover"
      {...props}
    >
      <motion.span
        className="absolute inset-0 bg-green-03 -z-10"
        variants={highlightVariants}
        transition={{ duration: 0.2, ease: "easeOut" }}
      />
      <span className="relative z-10">{children}</span>
    </motion.a>
  );
};

export default AnimatedLink;
