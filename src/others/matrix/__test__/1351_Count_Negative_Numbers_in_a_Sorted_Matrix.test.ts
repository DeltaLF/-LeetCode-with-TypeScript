import { countNegatives } from "../1351_Count_Negative_Numbers_in_a_Sorted_Matrix";

test("countNegatives", () => {
  // one
  expect(countNegatives([[-1]])).toBe(1);
  expect(countNegatives([[0]])).toBe(0);
  // two
  expect(
    countNegatives([
      [2, 0],
      [1, 0],
    ])
  ).toBe(0);
  expect(
    countNegatives([
      [3, -1],
      [1, -5],
    ])
  ).toBe(2);

  expect(
    countNegatives([
      [0, 0, 0, 0, 0, 0],
      [-1, -1, -1, -1, -1, -1],
    ])
  ).toBe(6);
});
