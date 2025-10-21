import { cn } from "@/utils/classNameMerge";
import KolbeYang from "./KolbeYang";

interface Props {
  className?: string;
}
const Footer = ({ className }: Props) => {
  return (
    <section
      className={cn(
        "flex justify-start  flex-col  items-center text-center",
        "p-[8px] h-[400px]",
        "sm:p-[40px] sm:h-[600px]",
        className,
      )}
    >
      <KolbeYang
        fill="var(--color-primary-500)"
        className="w-full opacity-50"
      />
    </section>
  );
};

export default Footer;
