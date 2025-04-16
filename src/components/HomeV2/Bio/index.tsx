import { cn } from "@/utils/classNameMerge";

interface Props {
  className?: string;
}
const Bio = ({ className }: Props) => {
  return (
    <section
      className={cn(
        "flex text-[40px] font-medium leading-[34px] justify-center gap-2 flex-col tracking-tighter items-start",
        className,
      )}
    >
      <span className="max-w-[600px] w-full">
        I&apos;M PASSIONATE ABOUT PROGRAMMING, DESIGN, AND EVERYTHING IN BETWEEN
      </span>
    </section>
  );
};

export default Bio;
