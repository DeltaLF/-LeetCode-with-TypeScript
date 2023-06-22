import { maxProfit } from "../714_Best_Time_to_Buy_and_Sell_Stock_with_Transaction_Fee";
it("finds maxProfit", () => {
  // one
  expect(maxProfit([1], 0)).toBe(0);
  // two
  expect(maxProfit([1, 2], 0)).toBe(1);
  expect(maxProfit([1, 2], 2)).toBe(0);
  expect(maxProfit([2, 1], 0)).toBe(0);
  expect(maxProfit([2, 1], 5)).toBe(0);
  // three
  expect(maxProfit([1, 1, 1], 0)).toBe(0);
  expect(maxProfit([1, 3, 1], 0)).toBe(2);
  expect(maxProfit([1, 3, 1], 1)).toBe(1);
  expect(maxProfit([3, 3, 1], 0)).toBe(0);
  expect(maxProfit([3, 3, 1], 5)).toBe(0);
});
