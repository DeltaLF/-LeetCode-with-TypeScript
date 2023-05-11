import { maxUncrossedLines } from "../1035_Uncrossed_Lines";

it("finds maxUncrossedLines", () => {
  //one
  expect(maxUncrossedLines([1], [1])).toBe(1);
  expect(maxUncrossedLines([1], [2])).toBe(0);
  //two
  expect(maxUncrossedLines([1, 1], [1, 1])).toBe(2);
  expect(maxUncrossedLines([1, 2], [1, 2])).toBe(2);
  expect(maxUncrossedLines([1, 1], [1, 2])).toBe(1);
  expect(maxUncrossedLines([2, 1], [1, 1])).toBe(1);
  expect(maxUncrossedLines([2, 1], [1, 2])).toBe(1);
  // three
  expect(maxUncrossedLines([1, 2, 3], [1, 2, 3])).toBe(3);
  expect(maxUncrossedLines([1, 3, 3], [1, 2, 3])).toBe(2);
  expect(maxUncrossedLines([3, 2, 1], [1, 2, 3])).toBe(1);

  expect(
    maxUncrossedLines(
      [1, 1, 1, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 1],
      [2, 2, 2, 1, 1, 2, 2, 1, 2, 1, 21, 2, 1, 2, 1, 1]
    )
  ).toBe(11);
});
