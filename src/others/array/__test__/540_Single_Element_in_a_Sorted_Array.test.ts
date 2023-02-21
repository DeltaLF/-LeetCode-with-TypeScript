import { singleNonDuplicate } from "../540_Single_Element_in_a_Sorted_Array";

it("finds singleNonDuplicate", () => {
  //one
  expect(singleNonDuplicate([1])).toBe(1);
  // two
  expect(singleNonDuplicate([1, 1, 2])).toBe(2);
  expect(singleNonDuplicate([1, 2, 2])).toBe(1);
  // three
  expect(singleNonDuplicate([1, 1, 2, 2, 3])).toBe(3);
  expect(singleNonDuplicate([1, 1, 2, 3, 3])).toBe(2);
  expect(singleNonDuplicate([1, 2, 2, 3, 3])).toBe(1);
  // four
  expect(singleNonDuplicate([1, 1, 2, 2, 3, 3, 4])).toBe(4);
  expect(singleNonDuplicate([1, 1, 2, 2, 3, 4, 4])).toBe(3);
  expect(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4])).toBe(2);
  expect(singleNonDuplicate([1, 2, 2, 3, 3, 4, 4])).toBe(1);
});
