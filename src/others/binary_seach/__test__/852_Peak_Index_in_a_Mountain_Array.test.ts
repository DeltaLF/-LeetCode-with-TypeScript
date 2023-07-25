import { peakIndexInMountainArray } from "../852_Peak_Index_in_a_Mountain_Array";

it("finds peakIndexInMountainArray", () => {
  expect(peakIndexInMountainArray([1, 3, 2])).toBe(1);
  expect(peakIndexInMountainArray([1, 3, 2, 2])).toBe(1);
  expect(peakIndexInMountainArray([1, 3, 4, 2])).toBe(2);
  expect(peakIndexInMountainArray([1, 5, 3, 2, 1])).toBe(1);
  expect(peakIndexInMountainArray([1, 2, 5, 3, 2, 1])).toBe(2);
  expect(peakIndexInMountainArray([1, 2, 4, 5, 3, 2, 1])).toBe(3);
});
