import { knightProbability } from "../688_Knight_Probability_in_Chessboard";

it("finds knightProbability", () => {
  expect(knightProbability(1, 1, 0, 0)).toBe(0);
  expect(knightProbability(1, 5, 0, 0)).toBe(0);
  expect(knightProbability(1, 10, 0, 0)).toBe(0);
  expect(knightProbability(25, 100, 0, 0).toFixed(5)).toBe("0.00122");
});
