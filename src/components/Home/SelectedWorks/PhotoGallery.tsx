import { cn } from "@/utils/classNameMerge";
import { Project } from "./types";

interface Props {
  project: Project;
}

const PhotoGallery = ({ project }: Props) => {
  const { imagePaths, title } = project;

  return (
    <div
      className={cn(
        "w-full max-w-[600px] relative flex gap-2 scrollbar-hide",
        "flex-row overflow-x-auto p-2",
        "sm:flex-col",
      )}
    >
      {imagePaths.map((imagePath) => (
        <img
          key={imagePath}
          src={imagePath}
          alt={title}
          className="w-[calc(100%-20px)] object-cover h-auto rounded-md"
        />
      ))}
    </div>
  );
};

export default PhotoGallery;
