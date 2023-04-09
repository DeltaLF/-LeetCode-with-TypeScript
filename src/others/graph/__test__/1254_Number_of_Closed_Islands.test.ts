import { closedIsland } from "../1254_Number_of_Closed_Islands";

it("finds the number of closedIsland", () => {
  // one
  expect(closedIsland([[0]])).toBe(0);
  expect(closedIsland([[1]])).toBe(0);
  // two
  expect(
    closedIsland([
      [0, 0],
      [0, 0],
    ])
  ).toBe(0);
  expect(
    closedIsland([
      [1, 1],
      [1, 1],
    ])
  ).toBe(0);
  // three
  expect(
    closedIsland([
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ])
  ).toBe(0);
  expect(
    closedIsland([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ])
  ).toBe(0);
  expect(
    closedIsland([
      [1, 0, 1],
      [1, 0, 1],
      [1, 1, 1],
    ])
  ).toBe(0);
  expect(
    closedIsland([
      [0, 0, 1],
      [1, 0, 1],
      [1, 1, 1],
    ])
  ).toBe(0);
  expect(
    closedIsland([
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
    ])
  ).toBe(1);
  expect(
    closedIsland([
      [1, 1, 1, 1],
      [1, 0, 1, 1],
      [1, 1, 0, 1],
      [1, 1, 1, 1],
    ])
  ).toBe(2);
});
