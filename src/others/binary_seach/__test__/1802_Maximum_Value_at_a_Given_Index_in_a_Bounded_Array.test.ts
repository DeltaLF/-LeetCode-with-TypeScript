import { maxValue } from "../1802_Maximum_Value_at_a_Given_Index_in_a_Bounded_Array";

it("finds maxValue", () => {
  expect(maxValue(1, 0, 1)).toBe(1);
  expect(maxValue(1, 0, 2)).toBe(2);
  expect(maxValue(6, 1, 10)).toBe(3);

  expect(maxValue(100000, 1, 1000000)).toBe(1341);
  expect(maxValue(100000, 99999, 1000000)).toBe(1342);

  expect(maxValue(100000000, 500, 100000000)).toBe(1);
});
