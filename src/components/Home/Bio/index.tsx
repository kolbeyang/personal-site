import { cn } from "@/utils/classNameMerge";

interface Props {
  className?: string;
}
const Bio = ({ className }: Props) => {
  return (
    <section
      className={cn(
        "flex text-[16px] sm:text-[28px] leading-[20px] sm:leading-[34px] justify-center gap-2 flex-col tracking-wider items-center px-[20px] py-[80px] sm:py-[120px] text-center",
        className,
      )}
    >
      <span className="max-w-[800px] w-full text-center">
        I&apos;M PASSIONATE ABOUT PROGRAMMING, DESIGN, AND EVERYTHING IN BETWEEN
      </span>
    </section>
  );
};

export default Bio;
