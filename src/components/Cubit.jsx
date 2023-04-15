import { animated } from "@react-spring/three";
const colors = ["red", "#f7aa36", "white", "yellow", "blue", "#6af752"];

export default function Cubit({ position, rotation, scale, ...rest }) {
  return (
    <animated.mesh
      {...rest}
      rotation={rotation}
      position={position}
      scale={scale}
      castShadow
      receiveShadow
    >
      <boxGeometry />
      {colors.map((color, index) => (
        <meshStandardMaterial
          key={index}
          attach={`material-${index}`}
          color={color}
        />
      ))}
    </animated.mesh>
  );
}