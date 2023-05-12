import { mostPoints } from "../2140_Solving_Questions_With_Brainpower";
it("finds maostPoints", () => {
  // one
  expect(mostPoints([[1, 1]])).toBe(1);
  expect(mostPoints([[1, 100]])).toBe(1);

  //two
  expect(
    mostPoints([
      [1, 1],
      [2, 1],
    ])
  ).toBe(2);
  expect(
    mostPoints([
      [100, 1],
      [2, 1],
    ])
  ).toBe(100);
  expect(
    mostPoints([
      [3, 2],
      [4, 3],
      [4, 4],
      [2, 5],
    ])
  ).toBe(5);
});
