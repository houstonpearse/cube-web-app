import { RoundedBox } from "@react-three/drei";

export default function Cube() {
  return (
    <mesh position={[0, 0, 0]}>
      <RoundedBox args={[1, 1, 1]} radius={0.05} smoothness={1}>
        <meshStandardMaterial color={"grey"} />
      </RoundedBox>
    </mesh>
  );
}
