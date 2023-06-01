import { shortestPathBinaryMatrix } from "../1091_Shortest_Path_in_Binary_Matrix";

test("shortestPathBinaryMatrix", () => {
  expect(
    shortestPathBinaryMatrix([
      [0, 0, 0],
      [1, 1, 0],
      [1, 1, 0],
    ])
  ).toBe(4);
  expect(shortestPathBinaryMatrix([[0]])).toBe(1);
});
