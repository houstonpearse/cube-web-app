import { Quaternion, Euler } from "three";

export function createProductTable() {
  let cubeRotationProductTable = [];
  const quaternionCubeRotations = this.eulerCubeRotations.map((euler) =>
    new Quaternion().setFromEuler(new Euler(...euler)).normalize()
  );
  for (let i = 0; i < this.eulerCubeRotations.length; i++) {
    cubeRotationProductTable[i] = [];
    for (let j = 0; j < this.eulerCubeRotations.length; j++) {
      let result = quaternionCubeRotations[i].clone().multiply(quaternionCubeRotations[j]);
      for (let k = 0; k < this.eulerCubeRotations.length; k++) {
        if (this.quaternionAproxEqual(result, quaternionCubeRotations[k], 0.001)) {
          cubeRotationProductTable[i][j] = k;
          break;
        }
      }
    }
  }
  return cubeRotationProductTable;
}

export function quaternionAproxEqual(q1, q2, e) {
  const isXclose = q1.x - e < q2.x && q2.x < q1.x + e;
  const isYclose = q1.y - e < q2.y && q2.y < q1.y + e;
  const isZclose = q1.z - e < q2.z && q2.z < q1.z + e;
  const isWclose = q1.w - e < q2.w && q2.w < q1.w + e;
  const isNXclose = q1.x - e < -q2.x && -q2.x < q1.x + e;
  const isNYclose = q1.y - e < -q2.y && -q2.y < q1.y + e;
  const isNZclose = q1.z - e < -q2.z && -q2.z < q1.z + e;
  const isNWclose = q1.w - e < -q2.w && -q2.w < q1.w + e;
  return (isXclose && isYclose && isZclose && isWclose) || (isNXclose && isNYclose && isNZclose && isNWclose);
}
