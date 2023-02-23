import { RoundedBox, MeshTransmissionMaterial } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useControls } from "leva";

const defaultcolors = ["red", "#f7aa36", "white", "yellow", "blue", "#6af752"];

export default function Cube({ position, args, colors = defaultcolors }) {
  return (
    <mesh
      castShadow
      receiveShadow
      onClick={() => {
        console.log("CLICK");
      }}
    >
      <boxBufferGeometry attach="geometry" position={position} args={args} />
      {colors.map((color, index) => (
        <meshStandardMaterial
          key={index}
          attach={`material-${index}`}
          color={color}
        />
      ))}
    </mesh>
  );
}
