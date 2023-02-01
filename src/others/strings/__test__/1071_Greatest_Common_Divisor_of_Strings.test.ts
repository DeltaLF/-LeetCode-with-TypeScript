import { gcdOfStrings } from "../1071_Greatest_Common_Divisor_of_Strings";

it("finds the gcd of stirngs", () => {
  // one
  expect(gcdOfStrings("a", "a")).toBe("a");
  expect(gcdOfStrings("a", "b")).toBe("");
  // two
  expect(gcdOfStrings("aa", "a")).toBe("a");
  expect(gcdOfStrings("aa", "aa")).toBe("aa");
  expect(gcdOfStrings("aa", "ab")).toBe("");
  expect(gcdOfStrings("aa", "b")).toBe("");
  // three
  expect(gcdOfStrings("a", "aaa")).toBe("a");
  expect(gcdOfStrings("aa", "aaa")).toBe("a");
  expect(gcdOfStrings("ab", "aaa")).toBe("");

  // four
  expect(gcdOfStrings("ab", "aaa")).toBe("");
  expect(gcdOfStrings("ab", "abab")).toBe("ab");
  expect(gcdOfStrings("aba", "abab")).toBe("");
  expect(gcdOfStrings("abab", "abab")).toBe("abab");
});
