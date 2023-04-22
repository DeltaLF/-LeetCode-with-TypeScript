import { minInsertions } from "../1312_Minimum_Insertion_Steps_to Make_a_String_Palindrome";

it("finds mininsertions", () => {
  expect(minInsertions("a")).toBe(0);
  expect(minInsertions("aa")).toBe(0);
  expect(minInsertions("aaa")).toBe(0);

  expect(
    minInsertions(
      "alkdskamskskakfkqoealkdsaalkdskamskskakfkqoealkdskamskskakfkqoealkdskamskskakfkqoealkdskamskskakfkqoealkdskamskskakfkqoelkdskamskskakfkalkdskamskskakfkqoealkdskamskskakfkqoealkdskamskskakfkqoealkdskamskskakfkqoealkdskamskskakfkqoeqoealkdskamskskakfkalkdskamskskakfkqoealkdskamskskakfkqoealkdskamskskakfkqoealkdskamskskakfkqoealkdskamskskakfkqoeqoealkdskamskskakfkqoealkdskamskskakfkqoealkdskamskskakfkqoekamskskakfkqoealkdskamskskakfkqoealkdskamskskakfkqoealkdskamskskakfkqoe"
    )
  ).toBe(184);
});
