import { cn } from "@/utils/classNameMerge";
import Image from "next/image";
import { Project } from "./types";

interface Props {
  isOpen?: boolean;
  project: Project;
}

const Expandable = ({ isOpen = false, project }: Props) => {
  const { imagePaths, description } = project;
  return (
    <div
      className={cn(
        "flex w-full gap-2 overflow-x-auto scrollbar-hidden overflow-hidden",
        {
          "bg-transparent": isOpen,
          "max-h-px h-[px] bg-text-base": !isOpen,
        },
      )}
    >
      <div className={cn("w-full flex flex-col flex-1 overflow-hidden")}>
        <span className="px-2 sm:px-5 pb-2 text-base sm:text-xl w-full max-w-[800px]">
          {description.toUpperCase()}
        </span>
        <div
          className={cn(
            "w-full flex flex-1 overflow-y-hidden scrollbar-hide gap-1  max-h-[240px] sm:max-h-[400px] transition-all duration-200 px-1",
            {
              "max-h-0": !isOpen,
              "": isOpen,
            },
          )}
        >
          {imagePaths.map((imagePath) => (
            <div
              className="shrink-0 overflow-hidden h-full rounded-2xl "
              key={imagePath}
            >
              <Image
                src={imagePath}
                alt=""
                height={500}
                width={500}
                className="h-full w-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Expandable;
