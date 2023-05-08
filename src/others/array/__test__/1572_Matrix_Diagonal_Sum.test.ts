import { diagonalSum } from "../1572_Matrix_Diagonal_Sum";

it("tests diagonal sum", () => {
  expect(diagonalSum([[1]])).toBe(1);
  expect(
    diagonalSum([
      [1, 2],
      [3, 4],
    ])
  ).toBe(10);
  expect(
    diagonalSum([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ])
  ).toBe(25);
});
