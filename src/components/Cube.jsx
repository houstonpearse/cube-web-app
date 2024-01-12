import { useSpringValue, animated } from "@react-spring/three";
import Cubit from "./Cubit";
import CubeState from "../cube-state/CubeState";
import CubeRotation from "../cube-state/CubeRotation";

const AnimatedCubit = animated(Cubit);
const springConfig = { mass: 1, friction: 50, tension: 200 };

export default function Cube(props) {
  let cubeState = new CubeState();
  console.log(cubeState.getStateOject());
  let cubitProperties = CubeState.cubePositions.map((position, index) => ({
    id: index,
    postitionIndex: index,
    rotationIndex: 0,
    position: useSpringValue(position, { config: springConfig }),
    rotation: useSpringValue(CubeRotation.default(), { config: springConfig }),
    scale: useSpringValue(0.93, { config: springConfig }),
  }));

  const handleClick = (index) => {
    console.log("animate");

    let { rotationIndex, position, rotation, scale } = cubitProperties[index];
    rotationIndex++;
    if (rotationIndex >= CubeRotation.numRotations) {
      rotationIndex = 0;
    }

    cubitProperties[index].rotationIndex = rotationIndex;
    rotation.start(CubeRotation.eulerCubeRotations[rotationIndex]);
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
        />
      ))}
    </group>
  );
}
