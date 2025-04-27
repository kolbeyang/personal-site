import Button from "@/components/ui/Button";
import { cn } from "@/utils/classNameMerge";
import { Icon, IconProps } from "@tabler/icons-react";
import {
  ForwardRefExoticComponent,
  HTMLAttributes,
  RefAttributes,
} from "react";

interface Props extends HTMLAttributes<HTMLAnchorElement> {
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>;
  className?: string;
  buttonClassName?: string;
  href?: string;
}

const LinkButton = ({
  icon: iconComponent,
  className,
  buttonClassName,
  ...props
}: Props) => {
  const IconComponent = iconComponent;
  return (
    <a className={cn("flex", className)} target="_blank" {...props}>
      <Button
        className={cn(
          "rounded-md ring ring-inset sm:size-[72px] flex justify-center items-center size-[56px] cursor-none",
          buttonClassName,
        )}
      >
        <IconComponent className="size-[30px] sm:size-[40px]" stroke={1} />
      </Button>
    </a>
  );
};

export default LinkButton;
