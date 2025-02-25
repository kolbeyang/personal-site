import { cn } from "@/utils/classNameMerge";
import { Icon, IconProps } from "@tabler/icons-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

interface Props {
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>;
  className?: string;
  buttonClassName?: string;
  href?: string;
}

const LinkButton = ({
  href,
  icon: iconComponent,
  className,
  buttonClassName,
}: Props) => {
  const IconComponent = iconComponent;
  return (
    <a className={cn("flex", className)} href={href} target="_blank">
      <button
        className={cn(
          "bg-base-03/20 rounded-full size-[72px] flex justify-center items-center border-[3px] border-base-03 border-opacity-50 text-base-03 hover:text-base hover:bg-base-03",
          buttonClassName,
        )}
      >
        <IconComponent size={40} stroke={2} />
      </button>
    </a>
  );
};

export default LinkButton;
