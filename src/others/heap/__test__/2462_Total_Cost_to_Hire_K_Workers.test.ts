import { totalCost } from "../2462_Total_Cost_to_Hire_K_Workers";

it("finds total cost", () => {
  expect(totalCost([1, 2, 4, 1], 3, 3)).toBe(4);
  expect(totalCost([17, 12, 10, 2, 7, 2, 11, 20, 8], 3, 4)).toBe(11);
  expect(totalCost([17, 12, 10, 2, 7, 2, 11, 20, 8], 3, 5)).toBe(11);
  expect(totalCost([17, 12, 10, 2, 7, 2, 11, 20, 8], 3, 3)).toBe(17);
  expect(
    totalCost(
      [
        2, 2, 2, 2, 2, 2, 1, 4, 5, 5, 5, 5, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
        2, 2,
      ],
      7,
      3
    )
  ).toBe(13);
  expect(
    totalCost(
      [
        1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 5, 1, 1, 4, 5, 4, 44, 4, 4, 4,
        44,
      ],
      5,
      10
    )
  ).toBe(5);
  expect(
    totalCost(
      [
        1, 5, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 5, 1, 1, 4, 5, 4, 44, 4, 4, 4,
        44,
      ],
      5,
      2
    )
  ).toBe(5);
});
