import { minimumDeviation } from "../1675_Minimize_Deviation_in_Array";

it("finds min deviation", () => {
  expect(minimumDeviation([1, 1])).toBe(0);
  expect(minimumDeviation([1, 2])).toBe(0);
  expect(minimumDeviation([1, 3])).toBe(1);

  expect(minimumDeviation([2, 4])).toBe(0);
  expect(minimumDeviation([2, 5])).toBe(3);

  expect(minimumDeviation([1, 2, 3, 4])).toBe(1);
  expect(minimumDeviation([4, 1, 5, 20, 3])).toBe(3);
});
