import { useSpringValue } from "@react-spring/three";
import Cubit from "./Cubit";

const springConfig = { mass: 1, friction: 50, tension: 200 };
const randomAngle = () => Math.random() * Math.PI - Math.PI / 2;
const tuples = [-1, 0, 1].flatMap(i => [-1, 0, 1].flatMap(j => [-1, 0, 1].map(k => [i, j, k])));

export default function Cube() {
  const rotation = useSpringValue([0, 0, 0], { config: springConfig });
  const scale = useSpringValue(1, { config: springConfig });

  const handleClick = () => {
    console.log("animate");
    rotation.start([randomAngle(), randomAngle(), randomAngle()]);
    scale.start(Math.random() + 0.5);
  };
  return (
  <group>
    {tuples.map((position, index) => (
      <Cubit
        key={index}
        rotation={rotation}
        position={position}
        scale={scale}
        onClick={handleClick}
      /> 
    ))}
  </group>
  );
}
