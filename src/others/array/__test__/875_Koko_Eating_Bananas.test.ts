import { minEatingSpeed } from "../875_Koko_Eating_Bananas";

it("finds the min eating speed", () => {
  // one
  expect(minEatingSpeed([1], 1)).toBe(1);
  expect(minEatingSpeed([1], 5)).toBe(1);
  // two
  expect(minEatingSpeed([1, 1], 2)).toBe(1);
  expect(minEatingSpeed([2, 3], 2)).toBe(3);
  expect(minEatingSpeed([3, 5], 3)).toBe(3);
  // three
  expect(minEatingSpeed([1, 1, 1], 3)).toBe(1);
  expect(minEatingSpeed([3, 5, 8], 3)).toBe(8);
  expect(minEatingSpeed([3, 5, 8], 4)).toBe(5);

  expect(minEatingSpeed([5, 4, 3, 2, 1], 5)).toBe(5);
  expect(minEatingSpeed([5, 4, 3, 2, 1], 6)).toBe(4);
  expect(minEatingSpeed([5, 4, 3, 2, 1], 7)).toBe(3);
  expect(minEatingSpeed([4, 4, 3, 2, 1], 8)).toBe(2);
  expect(minEatingSpeed([5, 4, 3, 2, 1], 8)).toBe(3);
  expect(minEatingSpeed([5, 4, 3, 2, 1], 9)).toBe(2);

  expect(minEatingSpeed([3, 6, 7, 11], 8)).toBe(4);

  expect(minEatingSpeed([11, 10, 5, 8, 4, 3, 3, 152, 58], 1000000)).toBe(1);
});
