import { MeshTransmissionMaterial } from "@react-three/drei";
import { ThreeElements, useFrame, useLoader } from "@react-three/fiber";
import { MotionValue } from "framer-motion";
import { useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { SVGLoader } from "three/addons/loaders/SVGLoader.js";
import { svgPaths } from ".";

type Props = ThreeElements["mesh"] & { scrollYProgress: MotionValue<number> };

const Logo = ({ scrollYProgress, ...props }: Props) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [logoIndex, setLogoIndex] = useState(0);

  const svgResults = useLoader(SVGLoader, svgPaths);
  const geometries = useMemo(() => {
    return svgResults.map((svgResult) => {
      const shapes = svgResult.paths.flatMap((p) => p.toShapes(true));
      const geometry = new THREE.ExtrudeGeometry(shapes, {
        depth: 16,
        bevelThickness: 1,
        bevelSize: 1,
        bevelSegments: 4,
      });
      geometry.center();
      return geometry;
    });
  }, [svgResults]);

  useFrame(() => {
    if (meshRef.current) {
      const scrollY = scrollYProgress.get();
      const scaled = scrollY * (svgPaths.length - 1);
      const selectedIndex = Math.round(scaled);
      const remainder = scaled - selectedIndex;
      setLogoIndex(selectedIndex);
      meshRef.current.rotation.y = -remainder * Math.PI;
    }
  });

  return (
    <mesh
      geometry={geometries[logoIndex]}
      scale={[1, -1, 1]}
      ref={meshRef}
      {...props}
    >
      {/*
      <MeshTransmissionMaterial
        transmission={0.9} // How transparent (0-1)
        thickness={2} // How "thick" the glass is
        ior={1.5} // Index of refraction (how much light bends)
        // 1.0 = air, 1.33 = water, 1.5 = glass, 2.4 = diamond
        chromaticAberration={0.3} // Rainbow distortion at edges
        roughness={0.1} // Surface smoothness
      />
      <meshPhongMaterial attach="material" color="#A1C0F3" />

      <meshToonMaterial attach="material" color="#7596BE" />
      */}
      <MeshTransmissionMaterial
        color="#B1D6FB"
        transmission={0.2}
        thickness={3}
        roughness={0.4}
      />
    </mesh>
  );
};

export default Logo;
