import { maxSatisfaction } from "../1402_Reducing_Dishes";

it("find max satisfaction", () => {
  // one
  expect(maxSatisfaction([-5])).toBe(0);
  expect(maxSatisfaction([-1])).toBe(0);
  expect(maxSatisfaction([0])).toBe(0);
  expect(maxSatisfaction([5])).toBe(5);
  //two
  expect(maxSatisfaction([-5, 5])).toBe(5);
  expect(maxSatisfaction([0, 5])).toBe(10);
  expect(maxSatisfaction([-1, 5])).toBe(9);
  expect(maxSatisfaction([5, -1])).toBe(9);
  expect(maxSatisfaction([5, 5])).toBe(15);
  // three
  expect(maxSatisfaction([0, -1, 5])).toBe(14);
  expect(maxSatisfaction([0, 0, 5])).toBe(15);
  expect(maxSatisfaction([5, 1, 0])).toBe(17);

  expect(maxSatisfaction([-1, -8, 0, 5, -7])).toBe(14);
});
