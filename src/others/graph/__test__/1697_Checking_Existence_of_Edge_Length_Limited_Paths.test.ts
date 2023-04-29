import { distanceLimitedPathsExist } from "../1697_Checking_Existence_of_Edge_Length_Limited_Paths";

it("finds distanceLimitedPathsExist", () => {
  // two
  expect(
    distanceLimitedPathsExist(
      2,
      [
        [0, 1, 59],
        [0, 1, 1],
        [1, 0, 1],
        [0, 1, 100],
        [0, 1, 155],
      ],
      [
        [0, 1, 100],
        [0, 1, 0],
        [0, 1, 50],
      ]
    )
  ).toEqual([true, false, true]);

  expect(
    distanceLimitedPathsExist(
      3,
      [
        [0, 1, 2],
        [1, 2, 4],
        [2, 0, 8],
        [1, 0, 16],
      ],
      [
        [0, 1, 2],
        [0, 2, 5],
      ]
    )
  ).toEqual([false, true]);
  expect(
    distanceLimitedPathsExist(
      5,
      [
        [0, 1, 10],
        [1, 2, 5],
        [2, 3, 9],
        [3, 4, 13],
        [3, 4, 14],
        [3, 4, 15],
        [3, 4, 16],
      ],
      [
        [0, 4, 14],
        [1, 4, 13],
        [3, 0, 10],
        [3, 0, 9],
        [2, 0, 6],
        [2, 1, 6],
      ]
    )
  ).toEqual([true, false, false, false, false, true]);
});
