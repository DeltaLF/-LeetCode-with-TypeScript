import { maxSubarraySumCircular } from "../918_Maximum_Sum_Circular_Subarray";

it("finds max subarray sum in circular array", () => {
  // one
  expect(maxSubarraySumCircular([1])).toBe(1);
  expect(maxSubarraySumCircular([-1])).toBe(-1);
  // two
  expect(maxSubarraySumCircular([1, -1])).toBe(1);
  expect(maxSubarraySumCircular([3, -5])).toBe(3);
  expect(maxSubarraySumCircular([3, 5])).toBe(8);
  expect(maxSubarraySumCircular([-3, 6])).toBe(6);
  // three
  expect(maxSubarraySumCircular([1, 2, -3])).toBe(3);
  expect(maxSubarraySumCircular([1, -2, 3])).toBe(4);
  expect(maxSubarraySumCircular([2, -1, 3])).toBe(5);
  expect(maxSubarraySumCircular([-1, -2, -3])).toBe(-1);
  expect(maxSubarraySumCircular([-1, 2, -3])).toBe(2);

  expect(maxSubarraySumCircular([1, -2, 3, -2])).toBe(3);
  expect(maxSubarraySumCircular([5, -3, 5])).toBe(10);

  expect(
    maxSubarraySumCircular([2, 3, 4, 5, -4, 0, -5, 0, -6, -9 - 4, 5, 6, 7])
  ).toBe(32);

  expect(maxSubarraySumCircular([100, -7, -7, 2, -7, -7, 100])).toBe(200);
});
