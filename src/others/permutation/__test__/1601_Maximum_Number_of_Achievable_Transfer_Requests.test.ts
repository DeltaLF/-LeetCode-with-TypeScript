import { maximumRequests } from "../1601_Maximum_Number_of_Achievable_Transfer_Requests";

it("finds maximum requests", () => {
  expect(maximumRequests(1, [[0, 0]])).toBe(1);
  expect(
    maximumRequests(2, [
      [0, 0],
      [1, 1],
    ])
  ).toBe(2);
  expect(
    maximumRequests(20, [
      [0, 1],
      [1, 0],
      [0, 1],
      [1, 2],
      [2, 0],
      [3, 4],
    ])
  ).toBe(5);
  expect(
    maximumRequests(20, [
      [0, 1],
      [1, 0],
      [0, 1],
      [1, 2],
      [2, 0],
      [3, 4],
      [1, 0],
      [0, 1],
      [1, 2],
      [2, 0],
      [3, 4],
      [1, 0],
      [0, 1],
      [1, 2],
      [2, 0],
      [3, 4],
    ])
  ).toBe(11);
  expect(
    maximumRequests(20, [
      [0, 1],
      [11, 0],
      [0, 1],
      [1, 2],
      [2, 0],
      [3, 4],
      [1, 0],
      [0, 10],
      [10, 2],
      [2, 0],
      [15, 4],
      [15, 0],
      [11, 1],
      [1, 2],
      [2, 0],
      [13, 14],
    ])
  ).toBe(9);
  expect(
    maximumRequests(20, [
      [0, 1],
      [1, 0],
      [0, 1],
      [1, 2],
      [2, 0],
      [3, 4],
      [1, 0],
      [0, 1],
      [1, 2],
      [2, 0],
      [3, 4],
      [1, 0],
      [0, 1],
      [1, 2],
      [2, 0],
      [3, 4],
    ])
  ).toBe(11);
});
