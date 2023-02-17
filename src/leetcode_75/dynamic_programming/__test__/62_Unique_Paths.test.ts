import { uniquePaths } from "../62_Unique_Paths";

it("finds uniquePaths", () => {
  expect(uniquePaths(1, 1)).toBe(1);
  expect(uniquePaths(3, 7)).toBe(28);
  expect(uniquePaths(20, 7)).toBe(177100);
  expect(uniquePaths(40, 7)).toBe(8145060);
  expect(uniquePaths(3, 2)).toBe(3);
});
