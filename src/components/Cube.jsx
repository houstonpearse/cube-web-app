import { useSpringValue } from "@react-spring/three";
import Cubit from "./Cubit";

const springConfig = { mass: 1, friction: 50, tension: 200 };
const randomAngle = () => Math.random() * Math.PI - Math.PI / 2;
const tuples = [-1, 0, 1].flatMap(i => [-1, 0, 1].flatMap(j => [-1, 0, 1].map(k => [i, j, k])));

export default function Cube() {
  const cubitProperties = tuples.map((position, index) => ({
    id: index,
    position: position,
    rotation: useSpringValue([0, 0, 0], { config: springConfig }),
    scale: useSpringValue(0.9, { config: springConfig }),
  }));
  console.log(cubitProperties)
  const handleClick = (index) => {
    console.log("animate");
    const {rotation, scale} = cubitProperties[index];
    rotation.start([randomAngle(), randomAngle(), randomAngle()]);
    scale.start(Math.random() + 0.5);
  };
  return (
  <group>
    {cubitProperties.map((properties, index) => (
      <Cubit
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
