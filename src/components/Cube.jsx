import { useState } from "react";
import { animated, useSpring, useSpringValue } from "@react-spring/three";

const defaultcolors = ["red", "#f7aa36", "white", "yellow", "blue", "#6af752"];
const randomAngle = () => {
  return Math.random() * Math.PI - Math.PI / 2;
};
export default function Cube({
  startingposition = [0, 0, 0],
  startingrotation = [0, 0, 0],
  startingscale = 1,
  colors = defaultcolors,
}) {
  const rotation = useSpringValue(startingrotation, {
    config: {
      mass: 1,
      friction: 50,
      tension: 170,
    },
  });

  const position = useSpringValue(startingposition, {
    config: {
      mass: 1,
      friction: 50,
      tension: 170,
    },
  });

  const scale = useSpringValue(startingscale, {
    config: {
      mass: 1,
      friction: 50,
      tension: 170,
    },
  });

  const handleClick = () => {
    console.log("animate");
    rotation.start([randomAngle(), randomAngle(), randomAngle()]);
    position.start([Math.random(), Math.random(), Math.random()]);
    scale.start(Math.random() + 0.1);
  };
  return (
    <animated.mesh
      castShadow
      receiveShadow
      rotation={rotation}
      position={position}
      scale={scale}
      onClick={() => handleClick()}
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
