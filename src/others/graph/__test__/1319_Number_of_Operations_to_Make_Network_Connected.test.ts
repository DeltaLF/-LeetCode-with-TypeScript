import { makeConnected } from "../1319_Number_of_Operations_to_Make_Network_Connected";

it("makes connected", () => {
  // 1
  expect(makeConnected(1, [])).toBe(0);
  // 2
  expect(makeConnected(2, [])).toBe(-1);
  expect(makeConnected(2, [[0, 1]])).toBe(0);
  // 3
  expect(makeConnected(3, [])).toBe(-1);
  expect(makeConnected(3, [[0, 1]])).toBe(-1);
  expect(
    makeConnected(3, [
      [0, 1],
      [0, 2],
    ])
  ).toBe(0);
  // 4
  expect(
    makeConnected(4, [
      [0, 1],
      [0, 2],
      [1, 2],
    ])
  ).toBe(1);

  expect(
    makeConnected(5, [
      [0, 1],
      [0, 2],
      [3, 4],
      [2, 3],
    ])
  ).toBe(0);

  expect(
    makeConnected(11, [
      [1, 4],
      [0, 3],
      [1, 3],
      [3, 7],
      [2, 7],
      [0, 1],
      [2, 4],
      [3, 6],
      [5, 6],
      [6, 7],
      [4, 7],
      [0, 7],
      [5, 7],
    ])
  ).toBe(3);
  expect(
    makeConnected(11, [
      [3, 4],
      [5, 6],
      [0, 3],
      [0, 5],
      [1, 7],
      [0, 4],
      [2, 6],
      [1, 6],
      [1, 3],
      [3, 7],
      [4, 5],
      [3, 5],
    ])
  ).toBe(3);
});
