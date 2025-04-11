import { cn } from "@/utils/classNameMerge";
import colors from "../../../colors";

const Home = () => {
  return (
    <div className="relative w-screen h-screen flex justify-center items-center overflow-hidden">
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
        className={cn(
          "absolute min-w-full min-h-full w-[100vmax] h-[100vmax] border border-gray-300 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
          "bg-radial from-wall-dark to-wall-light",
        )}
      >
        <defs>
          <radialGradient
            id="wallGradient"
            cx="50%"
            cy="50%"
            r="50%"
            fx="50%"
            fy="50%"
          >
            <stop offset="0%" stop-color={colors["bg-04"]} />
            <stop offset="100%" stop-color={colors["bg-03"]} />
          </radialGradient>
        </defs>
        <rect x="0" y="0" width="100" height="100" fill="url(#wallGradient)" />
        <line x1="0" y1="0" x2="100" y2="100" stroke="black" strokeWidth="2" />
      </svg>
      <div className="absolute flex justify-end flex-col items-start bg-bg-05/80 translate-x-[30%] -translate-y-1/2 -rotate-[15deg] w-screen h-screen">
        Hello
      </div>
      <div className="absolute h-[20vh] bg-gradient-to-b from-bg-03 to-transparent w-full top-0" />
    </div>
  );
};

export default Home;
