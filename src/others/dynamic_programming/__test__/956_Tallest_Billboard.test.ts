import { tallestBillboard } from "../#956_Tallest_Billboard";

it("finds tallestBillboard", () => {
  expect(tallestBillboard([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])).toBe(39);
  expect(
    tallestBillboard([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ])
  ).toBe(105);
  expect(
    tallestBillboard([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
  ).toBe(9);

  expect(
    tallestBillboard([
      1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 50, 50, 50, 150, 150, 150, 100,
      100, 100, 123,
    ])
  ).toBe(1023);
});
