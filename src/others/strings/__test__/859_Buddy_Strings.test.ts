import { buddyStrings } from "../859_Buddy_Strings";

it("check bubbyStrings", () => {
  // one
  expect(buddyStrings("a", "a")).toBe(false);
  expect(buddyStrings("a", "b")).toBe(false);
  // two
  expect(buddyStrings("aa", "aa")).toBe(true);
  expect(buddyStrings("ab", "ab")).toBe(false);
  expect(buddyStrings("ba", "ab")).toBe(true);
  expect(buddyStrings("ab", "ac")).toBe(false);
  // three
  expect(buddyStrings("aba", "aba")).toBe(true);
  expect(buddyStrings("abc", "abc")).toBe(false);
  expect(buddyStrings("abb", "abb")).toBe(true);
  expect(buddyStrings("abc", "acb")).toBe(true);
  expect(buddyStrings("abc", "ab")).toBe(false);
});
