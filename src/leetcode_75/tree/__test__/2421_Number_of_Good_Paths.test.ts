import { numberOfGoodPaths } from "../2421_Number_of_Good_Paths";

test("numberOfGoodPaths function with n=1", () => {
  expect(numberOfGoodPaths([0], [])).toBe(1);
});

test("numberOfGoodPaths function with n=2", () => {
  expect(numberOfGoodPaths([0, 1], [[0, 1]])).toBe(2);
  expect(numberOfGoodPaths([1, 1], [[0, 1]])).toBe(3);
});

test("numberOfGoodPaths function with n=3", () => {
  expect(
    numberOfGoodPaths(
      [0, 0, 0],
      [
        [0, 1],
        [1, 2],
      ]
    )
  ).toBe(6);
  expect(
    numberOfGoodPaths(
      [0, 1, 2],
      [
        [0, 1],
        [1, 2],
      ]
    )
  ).toBe(3);
  expect(
    numberOfGoodPaths(
      [2, 1, 2],
      [
        [0, 1],
        [1, 2],
      ]
    )
  ).toBe(4);
});

test("numberOfGoodPaths function", () => {
  expect(
    numberOfGoodPaths(
      [1, 3, 2, 1, 3],
      [
        [0, 1],
        [0, 2],
        [2, 3],
        [2, 4],
      ]
    )
  ).toBe(6);
});
