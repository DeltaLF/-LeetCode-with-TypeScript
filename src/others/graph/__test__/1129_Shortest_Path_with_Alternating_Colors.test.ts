import { shortestAlternatingPaths } from "../1129_Shortest_Path_with_Alternating_Colors";

it("finds the shorts alternating paths", () => {
  expect(
    shortestAlternatingPaths(
      3,
      [
        [0, 1],
        [1, 2],
      ],
      []
    )
  ).toEqual([0, 1, -1]);

  expect(shortestAlternatingPaths(3, [[0, 1]], [[2, 1]])).toEqual([0, 1, -1]);
  expect(shortestAlternatingPaths(3, [[0, 1]], [[1, 2]])).toEqual([0, 1, 2]);
  expect(
    shortestAlternatingPaths(
      3,
      [
        [0, 2],
        [1, 2],
      ],
      [
        [2, 1],
        [1, 2],
      ]
    )
  ).toEqual([0, 2, 1]);

  expect(
    shortestAlternatingPaths(
      5,
      [
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 4],
      ],
      [
        [1, 2],
        [2, 3],
        [3, 1],
      ]
    )
  ).toEqual([0, 1, 2, 3, 7]);
});
