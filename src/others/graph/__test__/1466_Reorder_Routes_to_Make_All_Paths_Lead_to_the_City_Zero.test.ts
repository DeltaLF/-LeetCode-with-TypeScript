import { minReorder } from "../1466_Reorder_Routes_to_Make_All_Paths_Lead_to_the_City_Zero";

it("finds the minimun redoer times", () => {
  // two
  expect(minReorder(2, [[1, 0]])).toBe(0);
  expect(minReorder(2, [[0, 1]])).toBe(1);
  // three
  expect(
    minReorder(3, [
      [0, 1],
      [1, 2],
    ])
  ).toBe(2);
  expect(
    minReorder(3, [
      [1, 0],
      [1, 2],
    ])
  ).toBe(1);
  expect(
    minReorder(3, [
      [0, 1],
      [2, 1],
    ])
  ).toBe(1);
});
