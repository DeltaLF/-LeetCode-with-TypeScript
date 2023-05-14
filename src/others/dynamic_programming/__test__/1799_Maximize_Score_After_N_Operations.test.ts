import { maxScore } from "../#1799_Maximize_Score_After_N_Operations";

it("finds maxScore", () => {
  expect(maxScore([1, 2])).toBe(1);
  expect(maxScore([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14])).toBe(138);
  expect(
    maxScore([
      10000, 200000, 3000, 400, 500, 6000, 70000, 80000, 9000, 1000, 11000,
      1200, 1300, 140,
    ])
  ).toBe(363020);
});
