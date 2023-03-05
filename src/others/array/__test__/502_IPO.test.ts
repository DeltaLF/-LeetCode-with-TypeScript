import { findMaximizedCapital } from "../502_IPO";

it("finds the maximized captial", () => {
  // no profit at all
  expect(findMaximizedCapital(3, 0, [1, 2, 3], [1, 1, 1])).toBe(0);
  // max profit
  expect(findMaximizedCapital(3, 1, [1, 2, 3], [1, 1, 1])).toBe(7);
  expect(findMaximizedCapital(2, 1, [1, 2, 3], [0, 1, 1])).toBe(6);
  expect(findMaximizedCapital(2, 0, [1, 2, 3], [0, 1, 1])).toBe(4);
  expect(findMaximizedCapital(3, 0, [1, 2, 3], [0, 1, 2])).toBe(6);

  expect(
    findMaximizedCapital(3, 1, [1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6])
  ).toBe(8);
  expect(
    findMaximizedCapital(3, 2, [1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6])
  ).toBe(14);
});
