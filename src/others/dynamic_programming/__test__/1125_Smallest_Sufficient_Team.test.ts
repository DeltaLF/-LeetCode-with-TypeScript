import { smallestSufficientTeam } from "../#1125_Smallest_Sufficient_Team";

it("finds smallestSufficientTeam", () => {
  // one
  expect(smallestSufficientTeam(["a"], [["a"]])).toEqual([0]);
  expect(smallestSufficientTeam(["a"], [["a"], ["a", "b", "c"]])).toEqual([0]);

  // two
  expect(smallestSufficientTeam(["a", "b"], [["a"], ["b"]])).toEqual([0, 1]);
  expect(
    smallestSufficientTeam(["a", "b"], [["a"], ["b"], ["a", "b"]])
  ).toEqual([2]);

  expect(
    smallestSufficientTeam(
      [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
      ],
      [
        [
          "a",
          "b",
          "c",
          "d",
          "e",
          "f",
          "g",
          "h",
          "i",
          "j",
          "k",
          "l",
          "m",
          "n",
          "o",
          "p",
        ],
        ["a"],
        ["b"],
      ]
    )
  ).toEqual([0]);

  expect(
    smallestSufficientTeam(
      [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
      ],
      [
        ["a"],
        ["b"],
        ["c"],
        ["d", "e"],
        ["f"],
        ["g"],
        ["h", "i", "j", "k"],
        ["l", "m", "n", "o", "p"],
        ["a"],
        ["b"],
      ]
    )
  ).toEqual([0, 1, 2, 3, 4, 5, 6, 7]);
});
