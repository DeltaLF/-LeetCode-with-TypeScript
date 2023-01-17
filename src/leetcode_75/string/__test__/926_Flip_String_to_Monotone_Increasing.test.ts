import { minFlipsMonoIncr } from "../926_Flip_String_to_Monotone_Increasing";

it("finds the min flips monoIncr", () => {
  // one
  expect(minFlipsMonoIncr("0")).toBe(0);
  expect(minFlipsMonoIncr("1")).toBe(0);
  // two
  expect(minFlipsMonoIncr("00")).toBe(0);
  expect(minFlipsMonoIncr("01")).toBe(0);
  expect(minFlipsMonoIncr("10")).toBe(1);
  expect(minFlipsMonoIncr("11")).toBe(0);
  // three
  expect(minFlipsMonoIncr("000")).toBe(0);
  expect(minFlipsMonoIncr("010")).toBe(1);
  expect(minFlipsMonoIncr("100")).toBe(1);
  expect(minFlipsMonoIncr("110")).toBe(1);
  expect(minFlipsMonoIncr("101")).toBe(1);
  expect(minFlipsMonoIncr("011")).toBe(0);

  expect(minFlipsMonoIncr("00011000")).toBe(2);
});
