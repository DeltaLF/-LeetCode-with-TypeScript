import { minPathSum } from "../64_Minimum_Path_Sum";

it("finds the minPathSum", () => {
  // one
  expect(minPathSum([[1]])).toBe(1);
  // two
  expect(minPathSum([[1, 1]])).toBe(2);
  expect(minPathSum([[1], [1]])).toBe(2);
  // three
  expect(minPathSum([[1, 1, 1]])).toBe(3);
  expect(minPathSum([[1], [2], [3]])).toBe(6);

  expect(
    minPathSum([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ])
  ).toBe(21);
  expect(
    minPathSum([
      [1, 2, 2, 12, 1, 2, 2, 1, 2, 4, 2, 1],
      [1, 2, 2, 12, 1, 2, 2, 1, 2, 4, 2, 1],
      [1, 2, 2, 12, 1, 2, 2, 1, 2, 4, 2, 1],
      [1, 2, 2, 12, 1, 2, 2, 1, 2, 4, 2, 1],
      [1, 2, 2, 12, 1, 2, 2, 1, 2, 4, 2, 1],
    ])
  ).toBe(36);
});
