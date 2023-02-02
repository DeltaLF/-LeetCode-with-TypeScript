import { isAlienSorted } from "../953_Verifying_an_Alien_Dictionary";

it("tests if it is alien sorted", () => {
  // one
  expect(isAlienSorted(["a", "a"], "abcdefghijklmnopqrstuvwxyz")).toBe(true);
  expect(isAlienSorted(["a", "b"], "abcdefghijklmnopqrstuvwxyz")).toBe(true);
  // two
  expect(isAlienSorted(["a", "ab"], "abcdefghijklmnopqrstuvwxyz")).toBe(true);
  expect(isAlienSorted(["aaaa", "ab"], "abcdefghijklmnopqrstuvwxyz")).toBe(
    true
  );
  expect(isAlienSorted(["aa", "ab"], "abcdefghijklmnopqrstuvwxyz")).toBe(true);

  expect(
    isAlienSorted(["hello", "leetcode"], "hlabcdefgijkmnopqrstuvwxyz")
  ).toBe(true);
});
