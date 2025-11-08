import { useEffect, useState } from "react";
import Bio from "./Bio";
import Footer from "./Footer";
import Landing from "./Landing";
import IntroAnimation from "./Landing/IntroAnimation";
import Links from "./Links";
import SelectedWorks from "./SelectedWorks";
import Tools from "./Tools";

const INTRO_ANIMATION_DURATION = 1500;

const Home = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsPlaying(false);
    }, INTRO_ANIMATION_DURATION);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="w-full items-center scrollbar-hide">
      <div className="flex flex-col p-[20px] sm:p-[40px] w-full h-dvh">
        {isPlaying ? (
          <IntroAnimation />
        ) : (
          <Landing className="rounded-r-[24px] rounded-bl-[24px]" />
        )}
      </div>
      <div className={isPlaying ? "hidden pointer-events-none" : ""}>
        <Bio className="w-full flex justify-center item-center" />
        <Tools className="rounded-[24px]" />
        <SelectedWorks />
        <Links />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
