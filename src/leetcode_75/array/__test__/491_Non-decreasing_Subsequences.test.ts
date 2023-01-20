import { findSubsequences } from "../491_Non-decreasing_Subsequences";

it("finds non-decreasing subsequecnes", () => {
  expect(findSubsequences([-1, 0])).toEqual([[-1, 0]]);

  expect(findSubsequences([4, 6, 7, 7]).sort()).toEqual(
    [
      [4, 6],
      [4, 6, 7],
      [4, 6, 7, 7],
      [4, 7],
      [4, 7, 7],
      [6, 7],
      [6, 7, 7],
      [7, 7],
    ].sort()
  );
});
