import { findDifference } from "../2215_Find_the_Difference_of_Two_Arrays";

test("test", () => {
  // one
  expect(findDifference([1], [2])).toEqual([[1], [2]]);
  expect(findDifference([1], [])).toEqual([[1], []]);
  expect(findDifference([], [2])).toEqual([[], [2]]);

  expect(findDifference([1, 2, 3], [1, 1, 2, 2])).toEqual([[3], []]);
  expect(findDifference([1, 2, 3], [1, 1, 2, 2, 3])).toEqual([[], []]);
  expect(findDifference([1, 2, 3, 3], [1, 1, 2, 2])).toEqual([[3], []]);
});
