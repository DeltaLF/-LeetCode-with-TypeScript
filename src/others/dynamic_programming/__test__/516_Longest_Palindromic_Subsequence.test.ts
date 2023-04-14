import { longestPalindromeSubseq } from "../516_Longest_Palindromic_Subsequence";

it("finds the longest palindrome in subseq", () => {
  // one
  expect(longestPalindromeSubseq("a")).toBe(1);
  // two
  expect(longestPalindromeSubseq("ab")).toBe(1);
  expect(longestPalindromeSubseq("aa")).toBe(2);
  // three
  expect(longestPalindromeSubseq("abc")).toBe(1);
  expect(longestPalindromeSubseq("aba")).toBe(3);
  expect(longestPalindromeSubseq("aab")).toBe(2);
  expect(longestPalindromeSubseq("abb")).toBe(2);
  expect(longestPalindromeSubseq("bab")).toBe(3);
  expect(longestPalindromeSubseq("aaa")).toBe(3);
});
