import { useRef } from "react";
import { useHelper } from "@react-three/drei";
import { DirectionalLightHelper } from "three";

export default function Lights() {
  return (
    <group>
      <ambientLight intensity={0.5} />
      <spotLight position={[3, 4, 5]} />
      <spotLight position={[-3, -3, -1]} />
    </group>
  );
}
