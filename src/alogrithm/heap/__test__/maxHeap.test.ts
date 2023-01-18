import { maxHeapify } from "../maxHeap";

it("tests maxHeapify function", () => {
  // input nunmber array and reutrn a maxHeap array
  // one
  expect(maxHeapify([1])).toEqual([1]);
  // two
  expect(maxHeapify([1, 2])).toEqual([2, 1]);
  expect(maxHeapify([2, 1])).toEqual([2, 1]);
  // three
  expect(maxHeapify([1, 2, 3])).toEqual([3, 1, 2]);
  expect(maxHeapify([3, 2, 1])).toEqual([3, 2, 1]);

  expect(maxHeapify([3, 4, 7, 6, 5, 10])).toEqual([10, 6, 7, 3, 5, 4]);
});
