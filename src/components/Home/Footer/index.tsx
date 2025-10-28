import { cn } from "@/utils/classNameMerge";
import KolbeYang from "./KolbeYang";

interface Props {
  className?: string;
}
const Footer = ({ className }: Props) => {
  return (
    <section
      className={cn(
        "flex justify-between  flex-col  items-center text-center",
        "p-[8px] h-[400px]",
        "sm:p-[40px] sm:h-[600px] sm:pb-[20px]",
        className,
      )}
    >
      <KolbeYang
        fill="var(--color-primary-500)"
        className="w-full opacity-50"
      />
      <span className={cn("text-primary-500", "text-[16px]", "sm:text-[24px]")}>
        KOLBEYANG@GMAIL.COM
      </span>
      <span className="text-primary-700 font-light text-[12px]">
        Made with Next.js, React, Three.js, Framer Motion, and TailwindCSS
      </span>
    </section>
  );
};

export default Footer;
