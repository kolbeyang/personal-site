import { cn } from "@/utils/classNameMerge";
import { forwardRef, HTMLProps } from "react";
import { IconExternalLink } from "@tabler/icons-react";

const BigButton = forwardRef<HTMLAnchorElement, HTMLProps<HTMLAnchorElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <a
        className={cn(
          "text-[74px] gap-[4px] items-center flex font-extrabold border-opacity-50 border-[4px] border-green-05 rounded-full px-[12px] bg-green-03 text-green-05 leading-[66px] pb-[8px] pt-[0px] hover:bg-green-05 hover:text-green-03",
          "hover:scale-125 transition-transform duration-100",
          className,
        )}
        target="_blank"
        ref={ref}
        {...props}
      >
        {children}
        <IconExternalLink size={24} stroke={3} />
      </a>
    );
  },
);
BigButton.displayName = "Button";

export default BigButton;
