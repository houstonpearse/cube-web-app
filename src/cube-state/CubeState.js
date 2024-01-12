import CubeRotation from "./CubeRotation";
export default class CubeState {
  constructor() {
    this.stateMatrix = CubeState.defaultStateMatrix();
  }

  getStateOject() {
    return this.stateMatrix.map((row) => {
      const positionIndex = row.findIndex((value) => value !== null);
      const position = CubeState.cubePositions[positionIndex];
      const rotationIndex = row[positionIndex];
      const rotation = CubeRotation.eulerCubeRotations[rotationIndex];
      return { position, positionIndex, rotation, rotationIndex };
    });
  }

  static defaultStateMatrix() {
    let matrix = new Array(this.numPieces).fill().map(() => new Array(this.numPieces).fill(null));
    matrix.forEach((value, index) => (value[index] = 0));
    return matrix;
  }

  static numPieces = 26;

  static cornerPositions = [
    [1, 1, 1],
    [1, 1, -1],
    [1, -1, 1],
    [1, -1, -1],
    [-1, 1, 1],
    [-1, 1, -1],
    [-1, -1, 1],
    [-1, -1, -1],
  ];

  static edgePositions = [
    [1, 1, 0],
    [1, 0, 1],
    [1, 0, -1],
    [1, -1, 0],
    [0, 1, 1],
    [0, 1, -1],
    [0, -1, 1],
    [0, -1, -1],
    [-1, 1, 0],
    [-1, 0, 1],
    [-1, 0, -1],
    [-1, -1, 0],
  ];

  static centerPositions = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
    [0, 0, -1],
    [0, -1, 0],
    [-1, 0, 0],
  ];

  static cubePositions = this.cornerPositions.concat(this.edgePositions).concat(this.centerPositions);
}
