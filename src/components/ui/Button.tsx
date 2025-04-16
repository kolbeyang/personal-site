import { cn } from "@/utils/classNameMerge";
import { ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "disabled"> {
  isDisabled?: boolean;
  isIcon?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, isDisabled = false, isIcon = false, ...props }, ref) => {
    return (
      <button
        className={cn(
          "text-[30px] font-light rounded-md ring hover:text-green-05 hover:ring-green-05/30 ring-inset flex justify-center items-center hover:bg-green-03 gap-2",
          className,
        )}
        ref={ref}
        disabled={isDisabled}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export default Button;
