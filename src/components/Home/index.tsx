import Image from "next/image";
import BubbleButtonSection from "./BubbleButtonSection";
import Links from "./Links";

const Home = () => {
  return (
    <div className="flex justify-between flex-col items-center pt-[36px] pb-[24px] size-full">
      <div className="w-full gap-[20px] flex flex-col">
        <div className="flex flex-col gap-[16px] items-center">
          <div className="border border-[8px] border-base-03 rounded-full overflow-hidden w-fit">
            <Image
              src="/profile_pic.jpg" // Image in the public folder
              alt="A description of the image"
              width={100} // Desired width
              height={100} // Desired height
            />
          </div>
          <div className="font-black text-base-03 text-[28px] leading-[30px]">
            HI, I&apos;M KOLBE
          </div>
        </div>
        <BubbleButtonSection />
      </div>
      <Links />
    </div>
  );
};

export default Home;
