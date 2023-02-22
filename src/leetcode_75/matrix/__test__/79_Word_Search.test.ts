import { exist } from "../79_Word_Search";

it("tests word exist or not", () => {
  expect(exist([["A"]], "A")).toBe(true);
  expect(exist([["A"]], "AA")).toBe(false);
  expect(exist([["A"]], "B")).toBe(false);
  expect(
    exist(
      [
        ["A", "B", "C"],
        ["F", "E", "D"],
        ["G", "H", "I"],
      ],
      "ABCDEFGH"
    )
  ).toBe(true);
  expect(
    exist(
      [
        ["A", "B", "C"],
        ["F", "E", "D"],
        ["G", "H", "I"],
      ],
      "ABCDEFGHI"
    )
  ).toBe(true);
  expect(
    exist(
      [
        ["A", "B", "C"],
        ["F", "E", "D"],
        ["G", "H", "H"],
      ],
      "ABCDEFGHI"
    )
  ).toBe(false);
  expect(
    exist(
      [
        ["A", "B", "C"],
        ["F", "E", "D"],
        ["G", "H", "I"],
      ],
      "ABCDEFGHII"
    )
  ).toBe(false);

  expect(
    exist(
      [
        ["A", "B", "C", "E"],
        ["S", "F", "E", "S"],
        ["A", "D", "E", "E"],
      ],
      "ABCESEEEFS"
    )
  ).toBe(true);
});
