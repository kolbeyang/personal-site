import Bio from "./Bio";
import Landing from "./Landing";
import Links from "./Links";
import SelectedWorks from "./SelectedWorks";
import Tools from "./Tools";

const Home = () => {
  return (
    <div className="w-full items-center">
      <div className="flex flex-col p-[20px] sm:p-[40px] w-full h-dvh">
        <Landing className="rounded-r-[24px] rounded-bl-[24px]" />
      </div>
      <Bio className="w-full flex justify-center item-center" />
      <Tools className="rounded-[24px]" />
      <SelectedWorks />
      <Links />
    </div>
  );
};

export default Home;
