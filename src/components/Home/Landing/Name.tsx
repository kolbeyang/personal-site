import { cn } from "@/utils/classNameMerge";
import InverseRounded from "./InverseRounded";

interface Props {
  className?: string;
}

const Name = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "flex bg-primary-100 tracking-wider pt-1 pl-2 pr-6 h-[40px] rounded-br-[16px] z-20 relative",
        className,
      )}
    >
      KOLBE YANG
      <InverseRounded
        fill="var(--color-primary-100)"
        className="absolute bottom-[-20px] left-0"
      />
      <InverseRounded
        fill="var(--color-primary-100)"
        className="absolute right-[-20px] top-0"
      />
    </div>
  );
};

export default Name;
