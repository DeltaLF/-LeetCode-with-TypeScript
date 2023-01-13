import { longestPath } from "../2246_Longest_Path_With_Different_Adjacent_Characters";

it("finds longestPath with different adjacent characters", () => {
  // one
  expect(longestPath([-1], "a")).toBe(1);
  // two
  expect(longestPath([-1, 0], "aa")).toBe(1);
  expect(longestPath([-1, 0], "ab")).toBe(2);
  // three
  expect(longestPath([-1, 0, 0], "aaa")).toBe(1);
  expect(longestPath([-1, 0, 0], "aba")).toBe(2);
  expect(longestPath([-1, 0, 0], "abc")).toBe(3);
  expect(longestPath([-1, 0, 0], "baa")).toBe(3);

  expect(longestPath([-1, 0, 0, 1, 1, 2], "abacbe")).toBe(3);
  expect(longestPath([-1, 0, 0, 0], "aabc")).toEqual(3);
});
