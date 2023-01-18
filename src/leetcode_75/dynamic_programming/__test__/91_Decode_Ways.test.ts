import { numDecodings } from "../91_Decode_Ways";

it("tests numDecodings function", () => {
  // 0
  expect(numDecodings("")).toBe(0);
  // 1
  expect(numDecodings("0")).toBe(0);
  expect(numDecodings("1")).toBe(1);
  // 2
  expect(numDecodings("00")).toBe(0);
  expect(numDecodings("01")).toBe(0);
  expect(numDecodings("10")).toBe(1);
  expect(numDecodings("11")).toBe(2);
  // 3
  expect(numDecodings("888")).toBe(1);
  expect(numDecodings("880")).toBe(0);
  expect(numDecodings("808")).toBe(0);
  expect(numDecodings("088")).toBe(0);
  expect(numDecodings("800")).toBe(0);
  expect(numDecodings("080")).toBe(0);
  expect(numDecodings("008")).toBe(0);
  expect(numDecodings("000")).toBe(0);

  expect(numDecodings("111")).toBe(3);
  expect(numDecodings("101")).toBe(1);
  expect(numDecodings("110")).toBe(1);

  // 4
  expect(numDecodings("1010")).toBe(1);
  expect(numDecodings("1110")).toBe(2);
  expect(numDecodings("1011")).toBe(2);
  expect(numDecodings("1000")).toBe(0);

  expect(numDecodings("226")).toBe(3);
});
