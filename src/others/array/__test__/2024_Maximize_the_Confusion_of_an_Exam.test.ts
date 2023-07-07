import { maxConsecutiveAnswers } from "../2024_Maximize_the_Confusion_of_an_Exam";

it("finds maxConsecutiveAnswers", () => {
  // one
  expect(maxConsecutiveAnswers("T", 1)).toBe(1);
  expect(maxConsecutiveAnswers("F", 1)).toBe(1);
  expect(maxConsecutiveAnswers("T", 10)).toBe(1);
  expect(maxConsecutiveAnswers("T", 0)).toBe(1);

  // two
  expect(maxConsecutiveAnswers("TT", 1)).toBe(2);
  expect(maxConsecutiveAnswers("TT", 0)).toBe(2);
  expect(maxConsecutiveAnswers("TT", 3)).toBe(2);
  expect(maxConsecutiveAnswers("TT", 3)).toBe(2);
  expect(maxConsecutiveAnswers("TF", 1)).toBe(2);
  expect(maxConsecutiveAnswers("TF", 0)).toBe(1);
  expect(maxConsecutiveAnswers("TF", 5)).toBe(2);
});
