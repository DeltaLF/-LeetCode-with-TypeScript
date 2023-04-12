import { isValid } from "../20_Valid_Parentheses";

it("tests is string contians valid parentheses or not", () => {
  expect(isValid("{")).toBe(false);
  expect(isValid("{)")).toBe(false);
  expect(isValid("}{")).toBe(false);
  expect(isValid("{}")).toBe(true);

  expect(isValid("{{{")).toBe(false);
  expect(isValid("{{{}})")).toBe(false);

  expect(isValid("{}")).toBe(true);
  expect(isValid("{{(())}}")).toBe(true);
});
