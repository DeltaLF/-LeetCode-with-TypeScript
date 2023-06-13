import { equalPairs } from "../2352_Equal_Row_and_Column_Pairs";

it("finds equalPairs", () => {
  // two
  expect(
    equalPairs([
      [1, 1],
      [1, 1],
    ])
  ).toBe(4);
  expect(
    equalPairs([
      [1, 2],
      [2, 1],
    ])
  ).toBe(2);
  expect(
    equalPairs([
      [1, 1],
      [2, 2],
    ])
  ).toBe(0);

  expect(
    equalPairs([
      [3, 2, 1],
      [1, 7, 6],
      [2, 7, 7],
    ])
  ).toBe(1);
});
