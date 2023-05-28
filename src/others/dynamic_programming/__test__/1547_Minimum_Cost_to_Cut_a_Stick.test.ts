import { minCost } from "../#1547_Minimum_Cost_to_Cut_a_Stick";

it("finds minCost", () => {
  expect(minCost(7, [1, 3, 4, 5])).toBe(16);
  expect(minCost(9, [5, 6, 1, 4, 2])).toBe(22);
  expect(minCost(100000, [100, 1000, 59, 651, 1234, 4846, 3, 5, 1, 4])).toBe(
    107483
  );
});
