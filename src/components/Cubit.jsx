// const colors = ["#6af752", "blue", "white", "yellow", "#f7aa36", "red"];
const colors = ["#2cbf13", "blue", "white", "yellow", "#fc9a05", "red"];
export default function Cubit(props) {
  return (
    <mesh {...props}>
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
