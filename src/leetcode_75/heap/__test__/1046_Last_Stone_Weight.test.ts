import { lastStoneWeight } from "../1046_Last_Stone_Weight";

it("finds the last tone weight", () => {
  // one
  expect(lastStoneWeight([1])).toBe(1);
  // two
  expect(lastStoneWeight([1, 1])).toBe(0);
  expect(lastStoneWeight([1, 3])).toBe(2);
  expect(lastStoneWeight([3, 1])).toBe(2);
  // three
  expect(lastStoneWeight([1, 3, 1])).toBe(1);
  expect(lastStoneWeight([2, 1, 1])).toBe(0);
  expect(lastStoneWeight([3, 7, 8])).toBe(2);

  expect(lastStoneWeight([2, 7, 4, 1, 8, 1])).toBe(1);
  expect(lastStoneWeight([8, 2, 4, 1, 1, 7])).toBe(1);
});
