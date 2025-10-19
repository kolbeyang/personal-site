import { cn } from "@/utils/classNameMerge";
import { motion } from "framer-motion";
import MainText from "../MainText";

interface Props {
  className?: string;
}

const Landing = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "relative size-full shrink-0 flex justify-center items-center bg-bg-400 overflow-hidden",
        className,
      )}
    >
      {/*Absolutely positioned background gradient*/}
      <div className="absolute left-(50%) top-(50%) h-[150vh] aspect-square bg-radial to-transparent -z-10 from-bg-500/70 to-[60%]" />

      {/*Wall and main container*/}
      <motion.div
        className={cn(
          "absolute flex justify-end flex-col items-start ",
          "w-[1000px] h-[1000px] bottom-[160px] left-[100px] sm:bottom-[200px] sm:left-[200px] origin-[0%_100%] -rotate-12",
        )}
      >
        {/*Wall Color*/}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.5,
            delay: 0.1,
          }}
          className="absolute w-full h-full bg-radial-[at_0%_100%] to-[50%] from-bg-500 to-transparent"
        />

        {/*Window - This will animate open*/}
        <motion.div
          className="absolute m-[50px] ml-[80px] w-[240px] shadow-none rounded-xl"
          initial={{ backgroundColor: "#FFFFFF00" }} // Start with white color at 0 opacity
          animate={{
            boxShadow: [
              "none",
              "0 0 60px 0 var(--color-bg-300)",
              "0 0 40px 0 var(--color-bg-300)",
              "0 0 20px 0 var(--color-bg-300)",
            ],
            backgroundColor: [
              "#FFFFFF00", // Start with 0 opacity
              "var(--color-bg-100)", // Flash brightly
              "var(--color-bg-200)", // Go back down
              "var(--color-bg-300)",
            ], // Slowly brighten
            height: [0, 20, 40, 800],
          }}
          transition={{
            duration: 0.8, // Total animation duration
            times: [0, 0.01, 0.06, 0.3], // Control timing of keyframes
            ease: ["easeIn", "easeOut", "easeInOut"], // Different easing for different segments
            delay: 0.1,
          }}
        />

        {/*Absolutely positioned background gradient*/}
        <motion.div
          className="translate-y-[50%] translate-x-[100px] left-0 absolute h-[600px] aspect-square bg-radial from-pink-300/30 to-transparent to-[60%] z-10 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.2,
            delay: 0.1,
          }}
        />

        {/*Image of me on the couch*/}
        <motion.img
          src="/me-and-the-couch.PNG" // Image in the public folder
          alt="A description of the image"
          className="absolute flex justify-end flex-col items-start left-[-230px] bottom-[-400px] scale-75"
          width={420}
          height={420}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
        />
      </motion.div>

      {/*Gradient for text*/}
      <div className="bg-gradient-to-l from-primary-300 to-transparent z-10 h-[200dvh] w-[200%] sm:w-[150dvh] absolute right-[-300px] -rotate-45" />

      <MainText className="right-5 top-5 sm:right-10 sm:top-10 z-20" />
    </div>
  );
};

export default Landing;
