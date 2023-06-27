import { kSmallestPairs } from "../#373_Find_K_Pairs_with_Smallest_Sums";

it("finds kSmallestPairs", () => {
  expect(kSmallestPairs([1, 7, 11], [2, 4, 6], 3).sort()).toEqual(
    [
      [1, 2],
      [1, 4],
      [1, 6],
    ].sort()
  );
  expect(kSmallestPairs([1, 1, 2], [1, 2, 3], 2).sort()).toEqual(
    [
      [1, 1],
      [1, 1],
    ].sort()
  );
  expect(kSmallestPairs([1, 2], [3], 3).sort()).toEqual(
    [
      [1, 3],
      [2, 3],
    ].sort()
  );
  expect(
    kSmallestPairs(
      [1, 1, 1, 1, 1, 1, 2, 3],
      [10, 10, 10, 10, 11, 12, 13, 14, 15, 60, 70, 80, 90, 100],
      20
    ).sort()
  ).toEqual(
    [
      [1, 10],
      [1, 10],
      [1, 10],
      [1, 10],
      [1, 10],
      [1, 10],
      [1, 10],
      [1, 10],
      [1, 10],
      [1, 10],
      [1, 10],
      [1, 10],
      [1, 10],
      [1, 10],
      [1, 10],
      [1, 10],
      [1, 10],
      [1, 10],
      [1, 10],
      [1, 10],
    ].sort()
  );

  expect(kSmallestPairs([1, 2, 4, 5, 6], [3, 5, 7, 9], 20).sort()).toEqual(
    [
      [1, 3],
      [2, 3],
      [1, 5],
      [4, 3],
      [2, 5],
      [5, 3],
      [1, 7],
      [6, 3],
      [4, 5],
      [2, 7],
      [5, 5],
      [1, 9],
      [6, 5],
      [4, 7],
      [2, 9],
      [5, 7],
      [6, 7],
      [4, 9],
      [5, 9],
      [6, 9],
    ].sort()
  );
});
