import { findNumberOfLIS } from "../#673_Number_of_Longest_Increasing_Subsequence";

it("findNumberOfLIS", () => {
  expect(findNumberOfLIS([0])).toBe(1);
  //two
  expect(findNumberOfLIS([0, 0])).toBe(2);
  expect(findNumberOfLIS([0, 1])).toBe(1);
  // three
  expect(findNumberOfLIS([0, 0, 0])).toBe(3);
  expect(findNumberOfLIS([0, 0, 1])).toBe(2);
  expect(findNumberOfLIS([0, 1, 1])).toBe(2);
});
