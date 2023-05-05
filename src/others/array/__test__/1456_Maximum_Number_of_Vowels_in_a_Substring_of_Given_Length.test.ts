import { maxVowels } from "../1456_Maximum_Number_of_Vowels_in_a_Substring_of_Given_Length";

it("finds maxVowels count in subString", () => {
  // one
  expect(maxVowels("a", 0)).toBe(0);
  expect(maxVowels("b", 0)).toBe(0);
  expect(maxVowels("b", 1)).toBe(0);
  expect(maxVowels("a", 1)).toBe(1);
  // two
  expect(maxVowels("aa", 0)).toBe(0);
  expect(maxVowels("ab", 1)).toBe(1);
  expect(maxVowels("aa", 2)).toBe(2);
  expect(maxVowels("ba", 2)).toBe(1);
  expect(maxVowels("ba", 1)).toBe(1);
  // three
  expect(maxVowels("aaa", 0)).toBe(0);
  expect(maxVowels("aba", 1)).toBe(1);
  expect(maxVowels("aba", 2)).toBe(1);
  expect(maxVowels("baa", 2)).toBe(2);
  expect(maxVowels("aaa", 2)).toBe(2);
  expect(maxVowels("aaa", 3)).toBe(3);
});
