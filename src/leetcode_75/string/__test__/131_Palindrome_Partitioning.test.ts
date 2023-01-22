import { partition } from "../131_Palindrome_Partitioning";

it("finds palidrome partition of string", () => {
  // 1
  expect(partition("a")).toEqual([["a"]]);
  // 2
  expect(partition("aa")).toEqual([["a", "a"], ["aa"]]);
  expect(partition("ab")).toEqual([["a", "b"]]);
  // 3
  expect(partition("aaa").sort()).toEqual(
    [["a", "a", "a"], ["a", "aa"], ["aa", "a"], ["aaa"]].sort()
  );

  expect(partition("abcb").sort()).toEqual(
    [
      ["a", "b", "c", "b"],
      ["a", "bcb"],
    ].sort()
  );
});
