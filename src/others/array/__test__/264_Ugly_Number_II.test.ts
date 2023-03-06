import { nthUglyNumber } from "../264_Ugly_Number_II";

it("finds nth uglyNUmber", () => {
  expect(nthUglyNumber(1)).toBe(1);
  expect(nthUglyNumber(10)).toBe(12);
  // expect(nthUglyNumber(100)).toBe(1536);
});
