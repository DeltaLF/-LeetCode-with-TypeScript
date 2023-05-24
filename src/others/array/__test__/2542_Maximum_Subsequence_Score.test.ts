import { maxScore } from "../2542_Maximum_Subsequence_Score";

it("finds maxScore", () => {
  //one
  expect(maxScore([1], [2], 1)).toBe(2);
  // two
  expect(maxScore([1, 2], [3, 2], 1)).toBe(4);
  expect(maxScore([1, 2], [3, 2], 2)).toBe(6);
  // three
  expect(maxScore([1, 2, 3], [3, 2, 1], 1)).toBe(4);
  expect(maxScore([1, 2, 3], [3, 2, 1], 2)).toBe(6);
  expect(maxScore([1, 2, 3], [3, 2, 1], 3)).toBe(6);

  expect(maxScore([1, 3, 3, 2], [2, 1, 3, 4], 3)).toBe(12);
});
