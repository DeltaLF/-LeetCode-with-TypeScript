import { maxValueOfCoins } from "../2218_Maximum_Value_of_K_Coins_From_Piles";

it("finds the maxValueOfCoints", () => {
  expect(maxValueOfCoins([[1]], 1)).toBe(1);
  expect(maxValueOfCoins([[1], [2], [3]], 1)).toBe(3);
  expect(maxValueOfCoins([[1], [2], [3]], 2)).toBe(5);

  expect(
    maxValueOfCoins(
      [
        [1, 5],
        [2, 1],
        [3, 1],
      ],
      1
    )
  ).toBe(3);
  expect(
    maxValueOfCoins(
      [
        [1, 5],
        [2, 1],
        [3, 1],
      ],
      2
    )
  ).toBe(6);
  expect(
    maxValueOfCoins(
      [
        [1, 5],
        [2, 1],
        [3, 1],
      ],
      3
    )
  ).toBe(9);

  expect(
    maxValueOfCoins(
      [
        [1, 100, 3],
        [7, 8, 9],
      ],
      2
    )
  ).toBe(101);

  expect(
    maxValueOfCoins(
      [[100], [100], [100], [100], [100], [100], [1, 1, 1, 1, 1, 1, 700]],
      7
    )
  ).toBe(706);
});
