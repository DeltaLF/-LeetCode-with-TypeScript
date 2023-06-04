import { findCircleNum } from "../547_Number_of_Provinces";

it("findCircleNum", () => {
  // one
  expect(findCircleNum([[1]])).toBe(1);
  // two
  expect(
    findCircleNum([
      [1, 0],
      [0, 1],
    ])
  ).toBe(2);
  expect(
    findCircleNum([
      [1, 1],
      [1, 1],
    ])
  ).toBe(1);
  // three
  expect(
    findCircleNum([
      [1, 1, 0],
      [1, 1, 0],
      [0, 0, 1],
    ])
  ).toBe(2);
  expect(
    findCircleNum([
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
    ])
  ).toBe(3);
});
