import { distinctNames } from "../2306_Naming_a_Company";

it("finds the amount of distinct name", () => {
  // two
  expect(distinctNames(["a", "b"])).toBe(0);
  expect(distinctNames(["a", "ab"])).toBe(0);
  expect(distinctNames(["aa", "bb"])).toBe(2);
  // three
  expect(distinctNames(["a", "b", "c"])).toBe(0);
  expect(distinctNames(["aa", "bb", "cc"])).toBe(6);

  expect(distinctNames(["coffee", "donuts", "time", "toffee"])).toBe(6);
});
