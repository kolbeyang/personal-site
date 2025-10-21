import { useFrame, useThree } from "@react-three/fiber";
import { MotionValue } from "framer-motion";
import { svgPaths } from ".";
import Logo from "./Logo";
import { CAMERA_ORIGINAL_Y_POS } from "./LogoContainer";

interface Props {
  scrollYProgress: MotionValue<number>;
}

const Logos = ({ scrollYProgress }: Props) => {
  const { camera } = useThree();

  useFrame(() => {
    const scrollY = scrollYProgress.get();
    camera.position.y =
      -scrollY * (svgPaths.length - 1) * 120 + CAMERA_ORIGINAL_Y_POS;
  });

  return (
    <>
      {svgPaths.map((svgPath, i) => (
        <Logo key={svgPath} svgPath={svgPath} position={[0, -120 * i, 0]} />
      ))}
    </>
  );
};

export default Logos;
