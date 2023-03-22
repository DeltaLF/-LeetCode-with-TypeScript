import { minScore } from "../2492_Minimum_Score_of_a_Path_Between_Two_Cities";

it("finds the min score in the map", () => {
  // two
  expect(minScore(2, [[1, 2, 5]])).toBe(5);
  // three
  expect(
    minScore(3, [
      [1, 2, 1],
      [1, 3, 5],
    ])
  ).toBe(1);
  expect(
    minScore(3, [
      [1, 2, 1],
      [2, 3, 5],
    ])
  ).toBe(1);
  expect(
    minScore(3, [
      [1, 2, 3],
      [2, 3, 5],
    ])
  ).toBe(3);
});
