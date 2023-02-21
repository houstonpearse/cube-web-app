import { useRef } from "react";
import { useHelper } from "@react-three/drei";
import { DirectionalLightHelper } from "three";

export default function Lights() {
  const light = useRef();
  useHelper(false && light, DirectionalLightHelper, "cyan");
  return (
    <group>
      <ambientLight intensity={0.5} />
      <directionalLight ref={light} position={[3, 4, 5]} />
      <directionalLight ref={light} position={[-3, -3, -1]} />
    </group>
  );
}
