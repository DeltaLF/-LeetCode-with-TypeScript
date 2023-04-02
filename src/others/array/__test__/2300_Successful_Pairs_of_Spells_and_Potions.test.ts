import { successfulPairs } from "../2300_Successful_Pairs_of_Spells_and_Potions";

it("returns the successfulPairs", () => {
  // one
  expect(successfulPairs([2], [2], 4)).toEqual([1]);
  expect(successfulPairs([2], [2], 5)).toEqual([0]);
  // two
  expect(successfulPairs([2, 3], [2], 5)).toEqual([0, 1]);
  expect(successfulPairs([2, 3], [2], 4)).toEqual([1, 1]);
  expect(successfulPairs([2, 3], [6, 2], 5)).toEqual([1, 2]);
  expect(successfulPairs([2, 3], [2], 100)).toEqual([0, 0]);
  expect(successfulPairs([2, 3], [2, 2], 100)).toEqual([0, 0]);
  expect(successfulPairs([2, 3], [2, 2], 1)).toEqual([2, 2]);

  expect(successfulPairs([2, 3], [2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 4)).toEqual([
    10, 10,
  ]);

  expect(
    successfulPairs(
      [1, 2, 3, 2, 1, 2, 3, 21, 2, 1, 21, 2, 3],
      [
        1, 2, 2, 2, 1, 2, 3, 2, 1, 2, 4, 2, 1, 2, 4, 12, 4, 21, 4, 2, 421, 412,
        421, 4, 21, 42, 1,
      ],
      10
    )
  ).toEqual([7, 7, 12, 7, 7, 7, 12, 27, 7, 7, 27, 7, 12]);
});
