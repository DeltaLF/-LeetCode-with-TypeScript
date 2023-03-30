import { isScramble } from "../87_Scramble_String";

it("tests isScarmble or not", () => {
  expect(isScramble("a", "a")).toBe(true);
  expect(isScramble("ab", "ab")).toBe(true);
  expect(isScramble("ab", "ba")).toBe(true);

  expect(isScramble("abc", "abc")).toBe(true);
  expect(isScramble("abc", "bca")).toBe(true);
  expect(isScramble("abc", "cba")).toBe(true);
  expect(isScramble("abcde", "caebd")).toBe(false);
  expect(isScramble("great", "rgeat")).toBe(true);
});
