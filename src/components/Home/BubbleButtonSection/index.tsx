import { links } from "@/links";
import And from "../And";
import Comma from "../Comma";
import ILetter from "../ILetter";
import BigButton from "./BigButton";

const index = () => {
  return (
    <div className="gap-1 flex flex-col w-full">
      <div className="flex items-end gap-[3px]">
        <ILetter className="w-auto h-full py-[4px]" />
        <BigButton href={links.github}>code </BigButton>
        <Comma className="w-auto h-[72px]" />
      </div>
      <div className="flex items-end gap-[3px] justify-end w-full">
        <BigButton
          href={links.dribbble}
          className="text-red-05 border-red-05 bg-red-03 hover:bg-red-05 hover:text-red-03"
        >
          design
        </BigButton>
        <Comma className="w-auto h-[72px]" />
      </div>
      <div className="flex items-end gap-[3px]">
        <BigButton
          href={links.medium}
          className="text-cyan-05 border-cyan-05 bg-cyan-03 hover:bg-cyan-05 hover:text-cyan-03"
        >
          write
        </BigButton>

        <Comma className="w-auto h-[72px]" />
      </div>
      <div className="flex items-end gap-[3px] justify-end w-full">
        <And className="w-auto h-full py-[4px] " />
        <BigButton
          href={links.instagram}
          className="text-purple-05 border-purple-05 bg-purple-03 hover:bg-purple-05 hover:text-purple-03"
        >
          draw
        </BigButton>
      </div>
    </div>
  );
};

export default index;
