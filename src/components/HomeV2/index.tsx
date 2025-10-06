import { cn } from "@/utils/classNameMerge";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Bio from "./Bio";
import Contact from "./Contact";
import MainText from "./MainText";
import QuickLinksSection from "./QuickLinksSection";
import SelectedWorks from "./SelectedWorks";
import Tools from "./Tools";
import Header from "./Header";

const Home = () => {
  const rotateRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: rotateRef,
    offset: ["start start", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [-13, 20, 100]);
  const opacityOnScroll = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1, 0.5, 0],
  );

  const mainWidthClassName = "max-w-[900px] w-full px-3";

  return (
    <div className="w-full items-center flex flex-col relative">
      {/* Main scene */}
      <div
        className="relative w-screen h-screen shrink-0 flex justify-center items-center bg-bg-400 overflow-hidden"
        ref={rotateRef}
      >
        {/*Absolutely positioned background gradient*/}
        <div className="absolute left-(50%) top-(50%) h-[150vh] aspect-square bg-radial to-transparent -z-10 from-bg-500/70 to-[60%]" />

        {/*Wall and main container*/}
        <motion.div
          className={cn(
            "absolute flex justify-end flex-col items-start ",
            "w-[1000px] h-[1000px] bottom-[calc(50%-100px)] left-[calc(50%-160px)] origin-[10%_90%]",
          )}
          style={{ rotate, opacity: opacityOnScroll }}
        >
          {/*Wall Color*/}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1.5,
              delay: 0.5,
            }}
            className="absolute w-full h-full bg-radial-[at_0%_100%] to-[50%] from-bg-600 to-transparent"
          />

          {/*Window - This will animate open*/}
          <motion.div
            className="absolute m-[50px] ml-[80px] w-[260px] shadow-none rounded-xl"
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
              duration: 3, // Total animation duration
              times: [0, 0.05, 0.1, 0.4], // Control timing of keyframes
              ease: ["easeIn", "easeOut", "easeInOut"], // Different easing for different segments
              delay: 0.5,
            }}
          />

          {/*Absolutely positioned background gradient*/}
          <motion.div
            className="translate-y-[50%] translate-x-[100px] left-0 absolute h-[600px] aspect-square bg-radial from-pink-300/30 to-transparent to-[60%] z-10 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 1,
            }}
          />

          {/*Image of me on the couch*/}
          <motion.img
            src="/me-and-the-couch.PNG" // Image in the public folder
            alt="A description of the image"
            className="absolute flex justify-end flex-col items-start left-[-230px] bottom-[-440px]"
            width={420}
            height={420}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.62,
            }}
          />
        </motion.div>

        {/*Top gradient*/}
        <div className="absolute h-0 bg-gradient-to-b from-highlight to-transparent w-full top-0 pointer-events-none" />

        <MainText />

        {/*Nav bar*/}
        <Header className="fixed" />
      </div>
      <div className="w-full h-[400px] bg-gradient-to-b from-bg-400 shrink-0 to-transparent" />
      <div className="flex flex-col w-full items-center">
        <Bio className={cn(mainWidthClassName, "mb-[140px]")} />
        <Tools className={cn(mainWidthClassName, "mb-[90px]")} />
        <SelectedWorks className="">
          <QuickLinksSection className={cn("", mainWidthClassName)} />
        </SelectedWorks>
        <Contact className={cn(mainWidthClassName, "h-screen")} />
      </div>
    </div>
  );
};

export default Home;
