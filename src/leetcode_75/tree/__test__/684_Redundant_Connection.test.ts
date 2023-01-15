import { findRedundantConnection } from "../684_Redundant_Connection";

it("find cycle in a graph", () => {
  expect(
    findRedundantConnection([
      [0, 1],
      [1, 2],
      [0, 2],
    ])
  ).toEqual([0, 2]);
  expect(
    findRedundantConnection([
      [1, 2],
      [0, 1],
      [0, 2],
    ])
  ).toEqual([0, 2]);
  expect(
    findRedundantConnection([
      [2, 0],
      [2, 1],
      [1, 0],
    ])
  ).toEqual([1, 0]);

  expect(
    findRedundantConnection([
      [1, 2],
      [2, 3],
      [3, 4],
      [1, 4],
      [1, 5],
    ])
  ).toEqual([1, 4]);
});
