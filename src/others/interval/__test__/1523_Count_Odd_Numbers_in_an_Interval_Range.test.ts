import { countOdds } from "../1523_Count_Odd_Numbers_in_an_Interval_Range";

it("finds the count of odds", () => {
  // 0
  expect(countOdds(0, 0)).toBe(0);
  expect(countOdds(1, 1)).toBe(1);
  expect(countOdds(2, 2)).toBe(0);

  // 1
  expect(countOdds(0, 1)).toBe(1);
  expect(countOdds(1, 2)).toBe(1);
  expect(countOdds(2, 3)).toBe(1);

  // 2
  expect(countOdds(0, 2)).toBe(1);
  expect(countOdds(1, 3)).toBe(2);
  expect(countOdds(2, 4)).toBe(1);

  // 3
  expect(countOdds(0, 3)).toBe(2);
  expect(countOdds(1, 4)).toBe(2);
  expect(countOdds(2, 5)).toBe(2);

  expect(countOdds(3, 9999999)).toBe(4999999);
});
