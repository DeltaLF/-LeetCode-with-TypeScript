import { mincostTickets } from "../983_Minimum_Cost_For_Tickets";

it("finds the mincost tickets", () => {
  // one
  expect(mincostTickets([1], [1, 1, 1])).toBe(1);
  expect(mincostTickets([1], [1, 2, 3])).toBe(1);
  // two
  expect(mincostTickets([1, 2], [1, 2, 3])).toBe(2);
  expect(mincostTickets([1, 5], [1, 2, 3])).toBe(2);
  expect(mincostTickets([1, 7], [1, 2, 3])).toBe(2);
  expect(mincostTickets([1, 30], [1, 2, 3])).toBe(2);
  expect(mincostTickets([1, 30], [1, 5, 7])).toBe(2);
  expect(mincostTickets([1, 2], [1, 1, 1])).toBe(1);
  // three
  expect(mincostTickets([1, 5, 6], [1, 2, 5])).toBe(2);
  expect(mincostTickets([1, 5, 30], [1, 2, 5])).toBe(3);
  // four
  expect(mincostTickets([1, 5, 7, 30], [1, 2, 5])).toBe(3);
  expect(mincostTickets([1, 5, 30], [1, 2, 1])).toBe(1);
});
