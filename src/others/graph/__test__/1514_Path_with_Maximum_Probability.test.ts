import { maxProbability } from "../1514_Path_with_Maximum_Probability";

it("finds maxProbability", () => {
  //two
  expect(maxProbability(3, [[0, 1]], [0.5], 0, 1)).toBe(0.5);
  expect(maxProbability(3, [[0, 1]], [0.5], 0, 2)).toBe(0);
});
