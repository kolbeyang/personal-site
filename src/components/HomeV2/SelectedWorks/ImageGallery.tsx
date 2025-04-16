import { cn } from "@/utils/classNameMerge";
import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  isOpen?: boolean;
  imagePaths: string[];
}

const ImageGallery = ({ isOpen = false, imagePaths }: Props) => {
  const placeholderImagePath = imagePaths.at(0);
  return (
    <div
      className={cn(
        "flex w-full rounded-lg transition-all duration-200 gap-2 overflow-x-auto scrollbar-hide",
        {
          "h-[200px] sm:h-[300px] bg-transparent": isOpen,
          "h-[8px]": !isOpen,
        },
      )}
    >
      {placeholderImagePath && (
        <div className="w-full bg-bg-100 h-full relative overflow-hidden">
          <motion.div
            className={cn("w-full absolute h-fit transition-all duration-500", {
              "opacity-0": isOpen,
            })}
            initial={{ y: 0 }}
            animate={{ y: "-80%" }}
            transition={{
              duration: 4,
              delay: 0.5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <Image
              src={placeholderImagePath}
              alt=""
              height={500}
              width={500}
              objectFit="cover"
              className="w-full blur-2xl saturate-200 brightness-125 "
            />
          </motion.div>
        </div>
      )}
      {isOpen &&
        imagePaths.map((imagePath) => (
          <div
            className="h-full shrink-0 rounded-md overflow-hidden"
            key={imagePath}
          >
            <Image
              src={imagePath}
              alt=""
              height={500}
              width={500}
              className="h-full w-auto object-cover"
            />
          </div>
        ))}
    </div>
  );
};

export default ImageGallery;
