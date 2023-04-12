import { largestPathValue } from "../1857_Largest_Color_Value_in_a_Directed_Graph";

it("finds largestPathValue", () => {
  //one
  expect(largestPathValue("a", [])).toBe(1);
  expect(largestPathValue("a", [[0, 0]])).toBe(-1);
  // two
  expect(largestPathValue("aa", [[0, 1]])).toBe(2);
  expect(largestPathValue("aa", [])).toBe(1);
  expect(largestPathValue("ab", [])).toBe(1);
  expect(
    largestPathValue("ab", [
      [0, 1],
      [1, 0],
    ])
  ).toBe(-1);
  // three
  expect(
    largestPathValue("aaa", [
      [0, 1],
      [1, 2],
    ])
  ).toBe(3);
  expect(
    largestPathValue("aba", [
      [0, 1],
      [1, 2],
    ])
  ).toBe(2);
  expect(
    largestPathValue("aaa", [
      [0, 1],
      [1, 1],
    ])
  ).toBe(-1);
});
