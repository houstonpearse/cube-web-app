import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  ContactShadows,
  Environment,
  Stage,
} from "@react-three/drei";
import Cube from "./components/Cube";
import Lights from "./components/Lights";

function App() {
  return (
    <Canvas shadows camera={{ position: [2, 2, 2] }}>
      <color attach="background" args={["white"]} />

      <Cube position={[0, 0, 0]} args={[1, 1, 1]} />
      <Lights />
      <ContactShadows
        position={[0, -1.5, 0]}
        opacity={0.75}
        scale={10}
        blur={2.5}
        far={4}
      />
      <Environment preset="city" />

      <OrbitControls
        makeDefault
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={(5 * Math.PI) / 8}
      />
    </Canvas>
  );
}

export default App;
