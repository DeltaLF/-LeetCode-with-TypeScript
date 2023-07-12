import { eventualSafeNodes } from "../802_Find_Eventual_Safe_States";

it("finds eventual safeNodes", () => {
  // one
  expect(eventualSafeNodes([[]])).toEqual([0]);
  expect(eventualSafeNodes([[0]])).toEqual([]);
  // two
  expect(eventualSafeNodes([[], []])).toEqual([0, 1]);
  expect(eventualSafeNodes([[0], [1]])).toEqual([]);
  expect(eventualSafeNodes([[1], []])).toEqual([0, 1]);
  expect(eventualSafeNodes([[], [0]])).toEqual([0, 1]);
  // three
  expect(eventualSafeNodes([[], [], []])).toEqual([0, 1, 2]);
  expect(eventualSafeNodes([[0], [0], [0]])).toEqual([]);
  expect(eventualSafeNodes([[0], [1], [2]])).toEqual([]);
  expect(eventualSafeNodes([[1], [2], []])).toEqual([0, 1, 2]);
  expect(eventualSafeNodes([[1], [1, 2], []])).toEqual([2]);
  expect(eventualSafeNodes([[2], [1, 2], []])).toEqual([0, 2]);
  expect(eventualSafeNodes([[2], [1], []])).toEqual([0, 2]);
});
