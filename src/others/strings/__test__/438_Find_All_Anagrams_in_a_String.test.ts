import { findAnagrams } from "../438_Find_All_Anagrams_in_a_String";

it("finds anagrams", () => {
  // one
  expect(findAnagrams("a", "a")).toEqual([0]);
  expect(findAnagrams("b", "a")).toEqual([]);
  // two
  expect(findAnagrams("ab", "a")).toEqual([0]);
  expect(findAnagrams("aa", "a")).toEqual([0, 1]);
  expect(findAnagrams("ab", "c")).toEqual([]);
  // three
  expect(findAnagrams("aaa", "a")).toEqual([0, 1, 2]);
  expect(findAnagrams("aba", "a")).toEqual([0, 2]);
  expect(findAnagrams("cab", "a")).toEqual([1]);
  expect(findAnagrams("asf", "z")).toEqual([]);
  expect(findAnagrams("aaa", "aa")).toEqual([0, 1]);
  expect(findAnagrams("aaa", "aaaa")).toEqual([]);
});
