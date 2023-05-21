import { shortestBridge } from "../934_Shortest_Bridge";

it("finds the shortesBridge requried", () => {
  //two
  expect(
    shortestBridge([
      [1, 0],
      [0, 1],
    ])
  ).toBe(1);
  // three
  expect(
    shortestBridge([
      [1, 0, 0],
      [0, 0, 0],
      [0, 0, 1],
    ])
  ).toBe(3);
  expect(
    shortestBridge([
      [1, 0, 0],
      [0, 0, 0],
      [0, 1, 1],
    ])
  ).toBe(2);
  expect(
    shortestBridge([
      [1, 0, 0],
      [0, 0, 0],
      [1, 1, 1],
    ])
  ).toBe(1);
  expect(
    shortestBridge([
      [1, 0, 1],
      [0, 0, 1],
      [1, 1, 1],
    ])
  ).toBe(1);
  // four
  expect(
    shortestBridge([
      [1, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 1],
    ])
  ).toBe(5);
  expect(
    shortestBridge([
      [1, 1, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 1],
    ])
  ).toBe(4);
  expect(
    shortestBridge([
      [1, 1, 1, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 1],
    ])
  ).toBe(3);
  expect(
    shortestBridge([
      [1, 1, 1, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 1],
    ])
  ).toBe(2);
});
