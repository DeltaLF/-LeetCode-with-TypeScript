import { findJudge } from "../997_Find_the_Town_Judge";

it("finds judge", () => {
  // judge exists
  expect(findJudge(2, [[1, 2]])).toBe(2);
  expect(
    findJudge(3, [
      [3, 1],
      [2, 1],
    ])
  ).toBe(1);
  expect(
    findJudge(5, [
      [2, 1],
      [3, 1],
      [4, 1],
      [5, 1],
    ])
  ).toBe(1);

  // judge doesn't exist
  expect(
    findJudge(2, [
      [1, 2],
      [2, 1],
    ])
  ).toBe(-1);
  expect(findJudge(2, [])).toBe(-1);
  expect(
    findJudge(3, [
      [3, 1],
      [2, 1],
      [1, 2],
    ])
  ).toBe(-1);
  expect(
    findJudge(3, [
      [3, 1],
      [1, 3],
    ])
  ).toBe(-1);
  expect(
    findJudge(5, [
      [2, 1],
      [3, 1],
      [1, 3],
      [4, 1],
      [5, 1],
    ])
  ).toBe(-1);
  expect(
    findJudge(5, [
      [2, 1],
      [3, 1],
      [1, 4],
      [5, 1],
    ])
  ).toBe(-1);
});
