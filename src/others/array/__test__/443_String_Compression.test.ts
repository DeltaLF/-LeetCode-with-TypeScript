import { compress } from "../443_String_Compression";

it("compress the array", () => {
  expect(compress(["a"])).toBe(1);
  expect(compress(["a", "a"])).toBe(2);
  expect(compress(["a", "a", "a", "a", "a", "a", "a", "a"])).toBe(2);
  expect(
    compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"])
  ).toBe(4);
});
