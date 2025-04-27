import { cn } from "@/utils/classNameMerge";
import { HTMLProps } from "react";

type Props = HTMLProps<HTMLAnchorElement>;

const HeaderButton = ({ className, ...props }: Props) => {
  return (
    <a
      className={cn(
        "backdrop-blur-md flex hover:bg-green-03 px-2 py-[2px] rounded-[2px] hover:text-green-05 hover:font-medium cursor-none",
        className,
      )}
      {...props}
    />
  );
};

export default HeaderButton;
