import { putMarbles } from "../2551_Put_Marbles_in_Bags";

it("finds max-min of marbles combinations", () => {
  // one
  expect(putMarbles([1], 1)).toBe(0);
  expect(putMarbles([10], 1)).toBe(0);
  // two
  expect(putMarbles([10, 3], 1)).toBe(0);
  expect(putMarbles([10, 3], 2)).toBe(0);
  // three
  expect(putMarbles([1, 2, 3], 1)).toBe(0);
  expect(putMarbles([1, 2, 3], 2)).toBe(2);
  expect(putMarbles([1, 2, 3], 3)).toBe(0);

  expect(
    putMarbles(
      [
        1, 1, 2, 2, 23, 45, 6, 4, 5, 44, 78, 6, 5, 12, 1, 2, 1, 2, 3, 21, 2, 25,
        41, 6, 1, 3, 1, 4, 5, 7, 1,
      ],
      5
    )
  ).toBe(329);
});
