import { useRef } from "react";
import { useHelper } from "@react-three/drei";
import { DirectionalLightHelper } from "three";

export default function Lights() {
  return (
    <group>
      <ambientLight intensity={0.8} />
      <spotLight castShadow intensity={0.3} position={[3, 3, 5]} />
      <spotLight castShadow intensity={0.3} position={[-3, 3, -1]} />
    </group>
  );
}
