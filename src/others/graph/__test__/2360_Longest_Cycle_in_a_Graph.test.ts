import { longestCycle } from "../2360_Longest_Cycle_in_a_Graph";

it("finds the longest cycle in a graph", () => {
  // one
  expect(longestCycle([-1])).toBe(-1);
  // two
  expect(longestCycle([1, 0])).toBe(2);
  expect(longestCycle([-1, -1])).toBe(-1);
  expect(longestCycle([1, -1])).toBe(-1);
  expect(longestCycle([-1, 0])).toBe(-1);
  // three
  expect(longestCycle([1, 2, 1])).toBe(2);
  expect(longestCycle([1, 2, 0])).toBe(3);
  expect(longestCycle([1, 0, 1])).toBe(2);

  expect(
    longestCycle([
      1, 19, 30, 87, 53, 91, 36, 6, 95, 14, 73, 2, 59, 76, 49, 41, 29, 28, 8, 9,
      96, 80, 68, 10, 31, 24, 0, 42, 39, 4, 51, 64, 25, 90, 35, 71, 97, 32, 16,
      18, 62, 22, 40, 78, 55, 13, 99, 93, 66, 26, 98, 5, 88, 74, 89, 81, 43, 12,
      44, 57, 75, 47, 34, 72, 85, 77, 3, 65, 46, 20, 60, 33, 48, 94, 84, 21, 69,
      54, 56, 11, 70, 83, 86, 79, 61, 37, 67, 15, 7, 38, 23, 52, 58, 27, 50, 63,
      92, 45, 17, 82,
    ])
  ).toBe(50);
});
