import { searchInsert } from "../35_Search_Insert_Position";

it("searchs insert with binary search", () => {
  // one
  expect(searchInsert([1], 0)).toBe(0);
  expect(searchInsert([1], 1)).toBe(0);
  expect(searchInsert([1], 2)).toBe(1);
  // two
  expect(searchInsert([1, 3], 0)).toBe(0);
  expect(searchInsert([1, 3], 1)).toBe(0);
  expect(searchInsert([1, 3], 2)).toBe(1);
  expect(searchInsert([1, 3], 3)).toBe(1);
  expect(searchInsert([1, 3], 4)).toBe(2);
  // three
  expect(searchInsert([1, 3, 5], 0)).toBe(0);
  expect(searchInsert([1, 3, 5], 1)).toBe(1);
  expect(searchInsert([1, 3, 5], 2)).toBe(1);
  expect(searchInsert([1, 3, 5], 3)).toBe(1);
  expect(searchInsert([1, 3, 5], 4)).toBe(2);
  expect(searchInsert([1, 3, 5], 5)).toBe(2);
  expect(searchInsert([1, 3, 5], 6)).toBe(3);
});
