import { mergeAlternately } from "../1768_Merge_Strings_Alternately";

it("merges alternately", () => {
  expect(mergeAlternately("a", "")).toBe("a");
  expect(mergeAlternately("", "b")).toBe("b");
  expect(mergeAlternately("a", "b")).toBe("ab");

  expect(mergeAlternately("abcdef", "")).toBe("abcdef");
  expect(mergeAlternately("abcdef", "zxcvb")).toBe("azbxccdvebf");
});
