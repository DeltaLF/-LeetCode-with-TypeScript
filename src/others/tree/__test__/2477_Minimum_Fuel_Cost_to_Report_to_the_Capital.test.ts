import { minimumFuelCost } from "../2477_Minimum_Fuel_Cost_to_Report_to_the_Capital";

it("finds the minimumFuelCost", () => {
  expect(
    minimumFuelCost(
      [
        [0, 1],
        [0, 2],
        [0, 3],
      ],
      5
    )
  ).toBe(3);
  expect(
    minimumFuelCost(
      [
        [3, 1],
        [3, 2],
        [1, 0],
        [0, 4],
        [0, 5],
        [4, 6],
        [3, 7],
      ],
      2
    )
  ).toBe(9);
  expect(
    minimumFuelCost(
      [
        [3, 1],
        [3, 2],
        [1, 0],
        [0, 4],
        [0, 5],
        [4, 6],
      ],
      2
    )
  ).toBe(7);
});
