import { addToArrayForm } from "../989_Add_to_Array-Form_of_Integer";

it("adds to array form", () => {
  expect(addToArrayForm([0], 1)).toEqual([1]);
  expect(addToArrayForm([3], 5)).toEqual([8]);

  expect(addToArrayForm([2, 7, 4], 181)).toEqual([4, 5, 5]);
  expect(addToArrayForm([1, 2, 0, 0], 43)).toEqual([1, 2, 4, 3]);
  expect(addToArrayForm([9, 9, 9, 9], 10000)).toEqual([1, 9, 9, 9, 9]);
  expect(
    addToArrayForm(
      [1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 7, 5, 6, 6, 4, 4, 0, 0, 6, 3],
      516
    )
  ).toEqual([1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 7, 5, 6, 6, 4, 4, 0, 5, 7, 9]);
});
