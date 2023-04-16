import { numWays } from "../1639_Number_of_Ways_to_Form_a_Target_String_Given_a_Dictionary";

it("finds numWays", () => {
  // one
  expect(numWays(["a", "a"], "a")).toBe(2);
  expect(numWays(["a", "b"], "a")).toBe(1);
  expect(numWays(["a", "b"], "ab")).toBe(0);
  // two
  expect(numWays(["ab", "bb"], "aa")).toBe(0);
  expect(numWays(["ab", "bb"], "b")).toBe(3);
  expect(numWays(["ab", "bb"], "bb")).toBe(2);
  // n
  expect(numWays(["acca", "bbbb", "caca"], "aba")).toBe(6);
});
