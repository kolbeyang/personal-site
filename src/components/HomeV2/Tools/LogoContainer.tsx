import { cn } from "@/utils/classNameMerge";
import { Canvas } from "@react-three/fiber";
import { MotionValue } from "framer-motion";
import Logo from "./Logo";

interface Props {
  className?: string;
  scrollYProgress: MotionValue<number>;
}

const LogoContainer = ({ className, scrollYProgress }: Props) => {
  return (
    <div className={cn("", className)}>
      <Canvas
        camera={{
          position: [-64, -136, 218],
          fov: 30,
          rotation: [0.175 * Math.PI, -0.075 * Math.PI, -0.1 * Math.PI],
        }}
      >
        <ambientLight intensity={4} />
        <pointLight position={[200, 200, 400]} decay={0} intensity={3} />
        <pointLight
          position={[-400, 400, -200]}
          decay={0}
          intensity={1.5}
          color="#FF46A9"
        />
        <pointLight
          position={[400, -400, -200]}
          decay={0}
          intensity={3}
          color="#00FFFF"
        />
        <hemisphereLight
          color="#FFFFFF" // Top light
          groundColor="#438AFF" // Bottom (fills shadows with color)
          intensity={3}
        />
        <Logo scrollYProgress={scrollYProgress} />
      </Canvas>
    </div>
  );
};

export default LogoContainer;
