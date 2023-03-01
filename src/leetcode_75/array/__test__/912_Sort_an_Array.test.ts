import { sortArray } from "../912_Sort_an_Array";

it("sorts array", () => {
  // one
  expect(sortArray([0])).toEqual([0]);
  // two
  expect(sortArray([0, 1])).toEqual([0, 1]);
  expect(sortArray([1, 0])).toEqual([0, 1]);
  expect(sortArray([0, 0])).toEqual([0, 0]);
  // three
  expect(sortArray([3, 2, 1])).toEqual([1, 2, 3]);
  expect(sortArray([1, 3, 1])).toEqual([1, 1, 3]);
  expect(sortArray([2, 1, 3])).toEqual([1, 2, 3]);

  expect(sortArray([5, 1, 1, 2, 0, 0])).toEqual([0, 0, 1, 1, 2, 5]);
});
