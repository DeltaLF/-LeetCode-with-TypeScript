import { strangePrinter } from "../664_Strange_Printer";

it("is strangePrinter", () => {
  expect(
    strangePrinter(
      "abcabcasdskasabcasdskasabcakasababcasdskasabcasdskasababcasdskasabcasdskasabasasdsabcasdskaskas"
    )
  ).toBe(57);
  expect(
    strangePrinter("abcabcasdskasabcasdskasabcasdskasasdsabcasdskaskas")
  ).toBe(31);
});
