import { PredictTheWinner } from "../486_Predict_the_Winner";

it("PredictTheWinner", () => {
  expect(PredictTheWinner([1])).toBeTruthy();
  expect(PredictTheWinner([1, 2])).toBeTruthy();
  expect(PredictTheWinner([1, 2, 3])).toBeTruthy();

  expect(
    PredictTheWinner([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ])
  ).toBeTruthy();
});
