import { longestSubarray } from "../1493_Longest_Subarray_of_1's_After_Deleting_One_Element";
it("finds longestSubarray", () => {
  // one
  expect(longestSubarray([0])).toBe(0);
  expect(longestSubarray([1])).toBe(0);
  // two
  expect(longestSubarray([0, 0])).toBe(0);
  expect(longestSubarray([0, 1])).toBe(1);
  expect(longestSubarray([1, 0])).toBe(1);
  expect(longestSubarray([1, 1])).toBe(1);
  // three
  expect(longestSubarray([0, 0, 0])).toBe(0);
  expect(longestSubarray([1, 0, 0])).toBe(1);
  expect(longestSubarray([0, 1, 0])).toBe(1);
  expect(longestSubarray([0, 0, 1])).toBe(1);
  expect(longestSubarray([1, 1, 0])).toBe(2);
  expect(longestSubarray([1, 0, 1])).toBe(2);
  expect(longestSubarray([0, 1, 1])).toBe(2);
  expect(longestSubarray([1, 1, 1])).toBe(2);

  expect(longestSubarray([1, 1, 0, 0, 1, 1, 1, 0, 1])).toBe(4);
});
