import { strStr } from "../28_Find_the_Index_of_the_First_Occurrence_in_a_String";

it("tests strStr function", () => {
  // failed
  expect(strStr("a", "b")).toBe(-1);
  expect(strStr("abc", "abcd")).toBe(-1);
  expect(strStr("aaaa", "aaaaa")).toBe(-1);
  expect(strStr("abcce", "abcd")).toBe(-1);
  expect(strStr("aaaxaaax", "aaaa")).toBe(-1);

  // succeed
  expect(strStr("a", "a")).toBe(0);
  expect(strStr("aaa", "a")).toBe(0);
  expect(strStr("aaaaa", "aaa")).toBe(0);
  expect(strStr("baaaa", "aaa")).toBe(1);
  expect(strStr("abc", "abc")).toBe(0);
  expect(strStr("abccbaabcc", "abc")).toBe(0);
  expect(strStr("abccbaabccbc", "cbc")).toBe(9);
  expect(strStr("abcdabcdabck", "abcdabck")).toBe(4);
  expect(strStr("aaaxaaaa", "aaaa")).toBe(4);
});
