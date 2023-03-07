import { minimumTime } from "../2187_Minimum_Time_to_Complete_Trips";

it("finds minimumTime to complete the trips", () => {
  expect(minimumTime([2], 1)).toBe(2);
  expect(minimumTime([2], 2)).toBe(4);
  // two
  expect(minimumTime([2, 2], 1)).toBe(2);
  expect(minimumTime([2, 2], 2)).toBe(2);
  expect(minimumTime([2, 2], 3)).toBe(4);
  expect(minimumTime([2, 2], 4)).toBe(4);

  expect(minimumTime([2, 3], 3)).toBe(4);
  expect(minimumTime([2, 3], 4)).toBe(6);
  expect(minimumTime([2, 3], 5)).toBe(6);

  // three
  expect(minimumTime([1, 2, 3], 1)).toBe(1);
  expect(minimumTime([1, 2, 3], 2)).toBe(2);
  expect(minimumTime([1, 2, 3], 3)).toBe(2);
  expect(minimumTime([1, 2, 3], 4)).toBe(3);
  expect(minimumTime([1, 2, 3], 5)).toBe(3);
  expect(minimumTime([1, 2, 3], 6)).toBe(4);
  expect(minimumTime([1, 2, 3], 7)).toBe(4);
  expect(minimumTime([1, 2, 3], 8)).toBe(5);
  expect(minimumTime([1, 2, 3], 9)).toBe(6);

  // fail
  expect(minimumTime([9, 3, 10, 5], 2)).toBe(5);
});
