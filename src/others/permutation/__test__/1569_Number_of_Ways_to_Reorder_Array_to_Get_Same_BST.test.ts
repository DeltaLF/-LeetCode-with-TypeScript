import { numOfWays } from "../#1569_Number_of_Ways_to_Reorder_Array_to_Get_Same_BST";

it("finds numOfWays", () => {
  expect(numOfWays([1])).toBe(0);

  expect(numOfWays([2, 1, 3])).toBe(1);

  expect(numOfWays([3, 4, 5, 1, 2])).toBe(5);

  expect(numOfWays([3, 1, 2, 5, 4, 6])).toBe(19);

  expect(
    numOfWays([9, 4, 2, 1, 3, 6, 5, 7, 8, 14, 11, 10, 12, 13, 16, 15, 17, 18])
  ).toBe(216212978);
  expect(
    numOfWays([
      31, 23, 14, 24, 15, 12, 25, 28, 5, 35, 17, 6, 9, 11, 1, 27, 18, 20, 2, 3,
      33, 10, 13, 4, 7, 36, 32, 29, 8, 30, 26, 19, 34, 22, 21, 16,
    ])
  ).toBe(936157466);

  expect(
    numOfWays([
      10, 23, 12, 18, 4, 29, 2, 8, 41, 31, 25, 21, 14, 35, 26, 5, 19, 43, 22,
      37, 9, 20, 44, 28, 1, 39, 30, 38, 36, 6, 13, 16, 27, 17, 34, 7, 15, 3, 11,
      24, 42, 33, 40, 32,
    ])
  ).toBe(182440977);
});
