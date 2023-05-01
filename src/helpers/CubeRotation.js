import { matrix } from "mathjs";
import { Quaternion, Euler } from "three";

const greekAlphabet = "αβγδϵζηθικλμνξοπρστυϕχψω";

const eulerCubeRotations = [
  [0, 0, 0],
  [0, 0, Math.PI / 2],
  [0, 0, Math.PI],
  [0, 0, (3 * Math.PI) / 2],
  [0, Math.PI / 2, 0],
  [0, Math.PI / 2, Math.PI / 2],
  [0, Math.PI / 2, Math.PI],
  [0, Math.PI / 2, (3 * Math.PI) / 2],
  [0, Math.PI, 0],
  [0, Math.PI, Math.PI / 2],
  [0, Math.PI, Math.PI],
  [0, Math.PI, (3 * Math.PI) / 2],
  [0, (3 * Math.PI) / 2, 0],
  [0, (3 * Math.PI) / 2, Math.PI / 2],
  [0, (3 * Math.PI) / 2, Math.PI],
  [0, (3 * Math.PI) / 2, (3 * Math.PI) / 2],
  [Math.PI / 2, 0, 0],
  [Math.PI / 2, 0, Math.PI / 2],
  [Math.PI / 2, 0, Math.PI],
  [Math.PI / 2, 0, (3 * Math.PI) / 2],
  [Math.PI / 2, Math.PI, 0],
  [Math.PI / 2, Math.PI, Math.PI / 2],
  [Math.PI / 2, Math.PI, Math.PI],
  [Math.PI / 2, Math.PI, (3 * Math.PI) / 2],
];

const quaternionCubeRotations = eulerCubeRotations.map((euler) =>
  new Quaternion().setFromEuler(new Euler(...euler)).normalize()
);

const quaternionAproxEqual = function (q1, q2, e) {
  const isXclose = q1.x - e < q2.x && q2.x < q1.x + e;
  const isYclose = q1.y - e < q2.y && q2.y < q1.y + e;
  const isZclose = q1.z - e < q2.z && q2.z < q1.z + e;
  const isWclose = q1.w - e < q2.w && q2.w < q1.w + e;
  const isNXclose = q1.x - e < -q2.x && -q2.x < q1.x + e;
  const isNYclose = q1.y - e < -q2.y && -q2.y < q1.y + e;
  const isNZclose = q1.z - e < -q2.z && -q2.z < q1.z + e;
  const isNWclose = q1.w - e < -q2.w && -q2.w < q1.w + e;
  return (
    (isXclose && isYclose && isZclose && isWclose) ||
    (isNXclose && isNYclose && isNZclose && isNWclose)
  );
};

let cubeRotationProductTable = [];
for (let i = 0; i < eulerCubeRotations.length; i++) {
  cubeRotationProductTable[i] = [];
  for (let j = 0; j < eulerCubeRotations.length; j++) {
    let result = quaternionCubeRotations[i]
      .clone()
      .multiply(quaternionCubeRotations[j]);
    for (let k = 0; k < eulerCubeRotations.length; k++) {
      if (quaternionAproxEqual(result, quaternionCubeRotations[k], 0.001)) {
        cubeRotationProductTable[i][j] = k;
        break;
      }
    }
  }
}

export { eulerCubeRotations, cubeRotationProductTable, greekAlphabet };
