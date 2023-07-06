import { minSubArrayLen } from "../209_Minimum_Size_Subarray_Sum";

it("finds minSubArrayLen", () => {
  // one
  expect(minSubArrayLen(1, [1])).toBe(1);
  expect(minSubArrayLen(2, [5])).toBe(1);
  expect(minSubArrayLen(2, [1])).toBe(0);
  // two
  expect(minSubArrayLen(2, [1, 2])).toBe(1);
  expect(minSubArrayLen(2, [1, 1])).toBe(2);
  expect(minSubArrayLen(3, [1, 1])).toBe(0);
  expect(minSubArrayLen(2, [3, 1])).toBe(1);
  // three
  expect(minSubArrayLen(2, [1, 1, 1])).toBe(2);
  expect(minSubArrayLen(3, [1, 1, 1])).toBe(3);
  expect(minSubArrayLen(3, [3, 1, 1])).toBe(1);
  expect(minSubArrayLen(3, [1, 3, 1])).toBe(1);
  expect(minSubArrayLen(3, [1, 1, 3])).toBe(1);
});
