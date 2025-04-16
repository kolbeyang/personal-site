import { cn } from "@/utils/classNameMerge";

interface Props {
  className?: string;
}

const GalleryImage = ({ className }: Props) => {
  return (
    <div
      className={cn("flex aspect-[4/3] bg-bg-300 h-full rounded-md", className)}
    />
  );
};

export default GalleryImage;
