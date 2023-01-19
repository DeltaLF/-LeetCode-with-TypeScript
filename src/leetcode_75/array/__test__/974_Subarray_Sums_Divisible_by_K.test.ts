import { subarraysDivByK } from "../974_Subarray_Sums_Divisible_by_K";

it("counts the subarray dividable by k", () => {
  // one
  expect(subarraysDivByK([3], 9)).toBe(0);
  expect(subarraysDivByK([3], 1)).toBe(1);
  // two
  expect(subarraysDivByK([1, 2], 3)).toBe(1);
  expect(subarraysDivByK([1, 2], 1)).toBe(3);
  expect(subarraysDivByK([1, 2], 2)).toBe(1);
  expect(subarraysDivByK([1, 2], 5)).toBe(0);

  expect(subarraysDivByK([5, 5, 5, 5, 5, 5], 5)).toBe(21);

  expect(subarraysDivByK([4, 5, 0, -2, -3, 1], 5)).toBe(7);
});
