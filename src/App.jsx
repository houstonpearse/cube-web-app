import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Cube from "./components/Cube";
import Lights from "./components/Lights";

function App() {
  return (
    <Canvas>
      <color attach="background" args={["black"]} />
      <Stars />
      <Lights />
      <OrbitControls />
      <Cube />
    </Canvas>
  );
}

export default App;
