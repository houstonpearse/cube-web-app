const colors = ["red", "#f7aa36", "white", "yellow", "blue", "#6af752"];

export default function Cubit({ position, rotation, scale, ...rest }) {
  return (
    <mesh {...rest} rotation={rotation} position={position} scale={scale}>
      <boxGeometry />
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
