import { checkInclusion } from "../567_Permutation_in_String";

it("checks inclusion of two strings", () => {
  // one
  expect(checkInclusion("a", "a")).toBe(true);
  expect(checkInclusion("a", "b")).toBe(false);
  // two
  expect(checkInclusion("a", "ab")).toBe(true);
  expect(checkInclusion("a", "aa")).toBe(true);
  expect(checkInclusion("ba", "ab")).toBe(true);
  expect(checkInclusion("a", "cb")).toBe(false);
  expect(checkInclusion("ab", "cb")).toBe(false);
  expect(checkInclusion("ab", "bb")).toBe(false);

  expect(checkInclusion("aaa", "a")).toBe(false);

  expect(checkInclusion("ab", "eidbaooo")).toBe(true);
  expect(checkInclusion("ab", "eidaoobo")).toBe(false);
});
