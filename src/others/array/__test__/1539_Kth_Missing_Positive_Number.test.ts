import { findKthPositive } from "../1539_Kth_Missing_Positive_Number";

it("finds kth positive number", () => {
  expect(findKthPositive([2], 1)).toBe(1);
  expect(findKthPositive([10], 1)).toBe(1);
  expect(findKthPositive([2], 2)).toBe(3);
  expect(findKthPositive([10], 2)).toBe(2);
  expect(findKthPositive([1], 10)).toBe(11);

  expect(findKthPositive([1, 2, 3, 4], 2)).toBe(6);

  expect(findKthPositive([2, 3, 4, 7, 11], 5)).toBe(9);

  expect(findKthPositive([2, 5, 7, 8, 10], 1)).toBe(1);
  expect(findKthPositive([2, 5, 7, 8, 10], 2)).toBe(3);
  expect(findKthPositive([2, 5, 7, 8, 10], 3)).toBe(4);
  expect(findKthPositive([2, 5, 7, 8, 10], 4)).toBe(6);
  expect(findKthPositive([2, 5, 7, 8, 10], 5)).toBe(9);
  expect(findKthPositive([2, 5, 7, 8, 10], 6)).toBe(11);
  expect(findKthPositive([2, 5, 7, 8, 10], 7)).toBe(12);

  expect(findKthPositive([3, 4, 5, 8, 9, 13, 14, 16], 1)).toBe(1);
  expect(findKthPositive([3, 4, 5, 8, 9, 13, 14, 16], 2)).toBe(2);
  expect(findKthPositive([3, 4, 5, 8, 9, 13, 14, 16], 3)).toBe(6);
  expect(findKthPositive([3, 4, 5, 8, 9, 13, 14, 16], 4)).toBe(7);
  expect(findKthPositive([3, 4, 5, 8, 9, 13, 14, 16], 5)).toBe(10);
  expect(findKthPositive([3, 4, 5, 8, 9, 13, 14, 16], 6)).toBe(11);
  expect(findKthPositive([3, 4, 5, 8, 9, 13, 14, 16], 7)).toBe(12);
  expect(findKthPositive([3, 4, 5, 8, 9, 13, 14, 16], 8)).toBe(15);
  expect(findKthPositive([3, 4, 5, 8, 9, 13, 14, 16], 9)).toBe(17);

  // not continuous
  expect(findKthPositive([2, 3, 5, 6, 7, 10], 1)).toBe(1);
  expect(findKthPositive([2, 3, 5, 6, 7, 10], 2)).toBe(4);
  expect(findKthPositive([2, 3, 5, 6, 7, 10], 3)).toBe(8);
  expect(findKthPositive([2, 3, 5, 6, 7, 10], 4)).toBe(9);
  expect(findKthPositive([2, 3, 5, 6, 7, 10], 5)).toBe(11);

  // continuous
  expect(findKthPositive([2, 3, 4, 5, 6, 7], 1)).toBe(1);
  expect(findKthPositive([2, 3, 4, 5, 6, 7], 2)).toBe(8);
  expect(findKthPositive([2, 3, 4, 5, 6, 7], 3)).toBe(9);
});
