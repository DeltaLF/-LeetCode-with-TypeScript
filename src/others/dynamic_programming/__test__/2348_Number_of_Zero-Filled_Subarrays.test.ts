import { zeroFilledSubarray } from "../2348_Number_of_Zero-Filled_Subarrays";

it("finds zero filled subarray", () => {
  // one
  expect(zeroFilledSubarray([1])).toBe(0);
  expect(zeroFilledSubarray([0])).toBe(1);
  // two
  expect(zeroFilledSubarray([1, 1])).toBe(0);
  expect(zeroFilledSubarray([1, 0])).toBe(1);
  expect(zeroFilledSubarray([0, 1])).toBe(1);
  expect(zeroFilledSubarray([0, 0])).toBe(3);
  // three
  expect(zeroFilledSubarray([1, 2, 3])).toBe(0);
  expect(zeroFilledSubarray([0, 2, 3])).toBe(1);
  expect(zeroFilledSubarray([1, 0, 3])).toBe(1);
  expect(zeroFilledSubarray([1, 2, 0])).toBe(1);
  expect(zeroFilledSubarray([0, 0, 3])).toBe(3);
  expect(zeroFilledSubarray([1, 0, 0])).toBe(3);
  expect(zeroFilledSubarray([0, 1, 0])).toBe(2);
  expect(zeroFilledSubarray([0, 0, 0])).toBe(6);

  expect(zeroFilledSubarray([1, 3, 0, 0, 2, 0, 0, 4])).toBe(6);
});
