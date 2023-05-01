// const cubePositions = [1, 0, -1].flatMap((i) =>
//   [1, 0, -1].flatMap((j) => [1, 0, -1].map((k) => [i, j, k]))
// );

const cornerPositions = [
  [1, 1, 1],
  [1, 1, -1],
  [1, -1, 1],
  [1, -1, -1],
  [-1, 1, 1],
  [-1, 1, -1],
  [-1, -1, 1],
  [-1, -1, -1],
];

const edgePositions = [
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

const centerPositions = [
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
  [0, 0, -1],
  [0, -1, 0],
  [-1, 0, 0],
];

const cubePositions = [
  ...cornerPositions,
  ...edgePositions,
  ...centerPositions,
];

export { cubePositions, cornerPositions, edgePositions, centerPositions };
