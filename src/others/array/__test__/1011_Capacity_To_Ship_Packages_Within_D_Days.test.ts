import { shipWithinDays } from "../1011_Capacity_To_Ship_Packages_Within_D_Days";

it("finds the min weight to ship in dats", () => {
  expect(shipWithinDays([1, 2, 3, 1, 1], 1)).toBe(8);
  expect(shipWithinDays([1, 2, 3, 1, 1], 5)).toBe(3);
  expect(shipWithinDays([1, 2, 3, 1, 1], 4)).toBe(3);

  expect(shipWithinDays([3, 2, 2, 4, 1, 4], 1)).toBe(16);
  expect(shipWithinDays([3, 2, 2, 4, 1, 4], 3)).toBe(6);
  expect(shipWithinDays([3, 2, 2, 4, 1, 4], 6)).toBe(4);

  expect(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1)).toBe(55);
  expect(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10)).toBe(10);
  expect(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)).toBe(15);
});
