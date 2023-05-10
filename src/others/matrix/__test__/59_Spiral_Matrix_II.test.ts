import { generateMatrix } from "../59_Spiral_Matrix_II";

it("generateMatrix", () => {
  expect(generateMatrix(3)).toEqual([
    [1, 2, 3],
    [8, 9, 4],
    [7, 6, 5],
  ]);
  expect(generateMatrix(5)).toEqual([
    [1, 2, 3, 4, 5],
    [16, 17, 18, 19, 6],
    [15, 24, 25, 20, 7],
    [14, 23, 22, 21, 8],
    [13, 12, 11, 10, 9],
  ]);
});
