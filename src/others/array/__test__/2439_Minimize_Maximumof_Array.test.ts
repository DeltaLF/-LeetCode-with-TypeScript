import { minimizeArrayValue } from "../2439_Minimize_Maximumof_Array";

it("finds the minimizeArrayValue", () => {
  expect(minimizeArrayValue([1])).toBe(1);
  expect(minimizeArrayValue([1, 2])).toBe(2);
  expect(minimizeArrayValue([2, 1])).toBe(2);
  expect(minimizeArrayValue([1, 3])).toBe(2);
  expect(minimizeArrayValue([3, 1])).toBe(3);

  expect(minimizeArrayValue([1, 2, 3])).toBe(2);
  expect(minimizeArrayValue([1, 3, 2])).toBe(2);
  expect(minimizeArrayValue([3, 2, 1])).toBe(3);
});
