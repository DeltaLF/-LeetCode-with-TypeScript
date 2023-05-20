import { calcEquation } from "../#399_Evaluate_Division";

it("finds calcEquation", () => {
  expect(
    calcEquation(
      [
        ["a", "b"],
        ["c", "d"],
      ],
      [1.0, 1.0],
      [
        ["a", "c"],
        ["b", "d"],
        ["b", "a"],
        ["d", "c"],
      ]
    )
  ).toEqual([-1.0, -1.0, 1.0, 1.0]);

  expect(
    calcEquation(
      [
        ["a", "c"],
        ["b", "e"],
        ["c", "d"],
        ["e", "d"],
      ],
      [2.0, 3.0, 0.5, 5.0],
      [["a", "b"]]
    )
  ).toEqual([0.06666666666666667]);

  expect(
    calcEquation(
      [
        ["a", "b"],
        ["b", "c"],
      ],
      [2.0, 3.0],
      [
        ["a", "c"],
        ["b", "a"],
        ["a", "e"],
        ["a", "a"],
        ["x", "x"],
      ]
    )
  ).toEqual([6.0, 0.5, -1.0, 1.0, -1.0]);
});
