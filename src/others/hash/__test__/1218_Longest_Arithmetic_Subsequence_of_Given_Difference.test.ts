import { longestSubsequence } from "../1218_Longest_Arithmetic_Subsequence_of_Given_Difference";

it("finds longestSubsequence", () => {
  //one
  expect(longestSubsequence([1], 0)).toBe(1);
  expect(longestSubsequence([1], 1)).toBe(1);
  expect(longestSubsequence([1], -1)).toBe(1);
  // two
  expect(longestSubsequence([1, 2], 0)).toBe(1);
  expect(longestSubsequence([1, 2], 1)).toBe(2);
  expect(longestSubsequence([1, 2], -1)).toBe(1);
  // three
  expect(longestSubsequence([1, 2, 3], 1)).toBe(3);
  expect(longestSubsequence([1, 2, 3], 2)).toBe(2);
  expect(longestSubsequence([1, 2, 3], -1)).toBe(1);

  expect(longestSubsequence([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 0)).toBe(10);
});
