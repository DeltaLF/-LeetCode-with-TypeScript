import { countSubarrays } from "../2444_Count_Subarrays_With_Fixed_Bounds";

it("counts fixed bounds subarray", () => {
  expect(countSubarrays([1], 1, 1)).toBe(1);
  expect(countSubarrays([1, 1], 1, 1)).toBe(3);
  expect(countSubarrays([1, 1, 1], 1, 1)).toBe(6);
  expect(countSubarrays([1, 1, 1, 1], 1, 1)).toBe(10);
  expect(countSubarrays([1, 3, 5, 2, 7, 5], 1, 5)).toBe(2);
  expect(countSubarrays([1, 1, 5, 2, 7, 5], 1, 5)).toBe(4);
});
