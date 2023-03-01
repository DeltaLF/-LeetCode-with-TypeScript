import { findKthLargest } from "../215_Kth_Largest_Element_in_an_Array";

it("finds kth largest number in unsorted array", () => {
  // [1]
  expect(findKthLargest([1], 1)).toBe(1);
  //[1,2]
  expect(findKthLargest([2, 1], 1)).toBe(2);
  expect(findKthLargest([2, 1], 2)).toBe(1);
  expect(findKthLargest([1, 2], 1)).toBe(2);
  expect(findKthLargest([1, 2], 2)).toBe(1);
  // [1,2,3]
  expect(findKthLargest([1, 3, 2], 1)).toBe(3);
  expect(findKthLargest([1, 3, 2], 3)).toBe(1);
  expect(findKthLargest([1, 3, 2], 2)).toBe(2);

  // [1,2,3,4,5,6]
  expect(findKthLargest([3, 2, 1, 5, 6, 4], 1)).toBe(6);
  expect(findKthLargest([3, 2, 1, 5, 6, 4], 2)).toBe(5);
  expect(findKthLargest([3, 2, 1, 5, 6, 4], 3)).toBe(4);
  expect(findKthLargest([3, 2, 1, 5, 6, 4], 4)).toBe(3);
  expect(findKthLargest([3, 2, 1, 5, 6, 4], 5)).toBe(2);
  expect(findKthLargest([3, 2, 1, 5, 6, 4], 6)).toBe(1);
  // [1,2,2,3,3,4,5,5,6]
  expect(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 1)).toBe(6);
  expect(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 2)).toBe(5);
  expect(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 3)).toBe(5);
  expect(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)).toBe(4);
  expect(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 5)).toBe(3);
  expect(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 6)).toBe(3);
  expect(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 7)).toBe(2);
  expect(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 8)).toBe(2);
  expect(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 9)).toBe(1);
});
