import { cn } from "@/utils/classNameMerge";
import CopyButton from "./CopyButton";

interface Props {
  className?: string;
}

const Contact = ({ className }: Props) => {
  return (
    <section
      id="contact"
      className={cn(
        "flex w-full flex-col items-center gap-[20px] justify-center",
        className,
      )}
    >
      <div
        className=" flex flex-col text-[60px] sm:text-[80px] leading-[48px] sm:leading-[64px] font-medium tracking-tighter items-center

        "
      >
        <span>LET&apos;S</span>
        <span>GET</span>
        <span>IN TOUCH</span>
      </div>
      <CopyButton />
    </section>
  );
};

export default Contact;
