import { cn } from "@/utils/classNameMerge";
import FooterLinks from "./FooterLinks";
import KolbeYang from "./KolbeYang";

interface Props {
  className?: string;
}
const Footer = ({ className }: Props) => {
  return (
    <section
      className={cn(
        "flex justify-between  flex-col  items-center text-center",
        "p-[20px] h-[400px]",
        "sm:p-[40px] sm:h-[600px] sm:pb-[20px]",
        className,
      )}
    >
      <div className="w-full flex flex-col gap-3 sm:gap-8">
        <KolbeYang
          fill="var(--color-primary-700)"
          className="w-full opacity-50"
        />
        <span
          className={cn("text-primary-700", "text-[16px]", "sm:text-[24px]")}
        >
          KOLBEYANG@GMAIL.COM
        </span>
      </div>
      <div className="w-full flex justify-center sm:justify-start">
        <FooterLinks />
      </div>
    </section>
  );
};

export default Footer;
