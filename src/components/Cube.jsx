import { useSpringValue, animated } from "@react-spring/three";
import Cubit from "./Cubit";
import {
  eulerCubeRotations,
  cubeRotationProductTable,
  greekAlphabet,
} from "../helpers/CubeRotation";
import { cubePositions } from "../helpers/CubePostions";

const AnimatedCubit = animated(Cubit);
const springConfig = { mass: 1, friction: 50, tension: 200 };

export default function Cube(props) {
  let cubitProperties = cubePositions.map((position, index) => ({
    id: index,
    postitionIndex: index,
    rotationIndex: 0,
    position: useSpringValue(position, { config: springConfig }),
    rotation: useSpringValue(eulerCubeRotations[0], { config: springConfig }),
    scale: useSpringValue(0.93, { config: springConfig }),
  }));
  const handleClick = (index) => {
    console.log("animate");
    let { rotationIndex, position, rotation, scale } = cubitProperties[index];
    rotationIndex++;
    if (rotationIndex >= eulerCubeRotations.length) {
      rotationIndex = 0;
    }
    cubitProperties[index].rotationIndex = rotationIndex;
    rotation.start(eulerCubeRotations[rotationIndex]);
  };
  return (
    <group>
      {cubitProperties.map((properties, index) => (
        <AnimatedCubit
          {...props}
          key={index}
          rotation={properties.rotation}
          position={properties.position}
          scale={properties.scale}
          onClick={() => handleClick(index)}
          castShadow
          receiveShadow
        />
      ))}
    </group>
  );
}
