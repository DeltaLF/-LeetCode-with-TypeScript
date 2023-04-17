import { kidsWithCandies } from "../1431_Kids_With_the_Greatest_Number_of_Candies";

it("tests kidsWithCandies", () => {
  expect(kidsWithCandies([1], 1)).toEqual([true]);
  expect(kidsWithCandies([1, 1], 1)).toEqual([true, true]);
  expect(kidsWithCandies([1, 2], 1)).toEqual([true, true]);
  expect(kidsWithCandies([1, 3], 1)).toEqual([false, true]);
  expect(kidsWithCandies([4, 2, 1, 1, 2], 1)).toEqual([
    true,
    false,
    false,
    false,
    false,
  ]);
});
