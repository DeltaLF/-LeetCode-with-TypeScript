import { maxProduct } from "../152_Maximum_Product_Subarray";

test.only("aa", () => {
  expect(maxProduct([3, -1, 4, -3, -6])).toBe(72);
});

it("tests maxPrdocut in an array", () => {
  expect(maxProduct([1])).toBe(1);
  expect(maxProduct([0])).toBe(0);
  expect(maxProduct([-1])).toBe(-1);

  expect(maxProduct([2, 3, -2, 4])).toBe(6);

  expect(maxProduct([-1, 2, -2, 4, 0, -5, -2, 2])).toBe(20);
  expect(maxProduct([-1, 2, -2, 4, 0, -5, 2, 2])).toBe(16);

  expect(maxProduct([-3, -2])).toBe(6);
  expect(maxProduct([-3, -2, 0])).toBe(6);
  expect(maxProduct([-3, 0, -2])).toBe(0);
  expect(maxProduct([-1, -1])).toBe(1);
  expect(maxProduct([-1, -1, 0])).toBe(1);
  expect(maxProduct([-1, 0, -1])).toBe(0);
  expect(maxProduct([-3, -1, -1])).toBe(3);
  expect(maxProduct([3, -1, 4, -3, -6])).toBe(72);
  expect(maxProduct([-3, -1, -1, 0])).toBe(3);
  expect(maxProduct([-3, 0, -1, -1])).toBe(1);
  expect(maxProduct([-3, -1, 0, -1])).toBe(3);
  expect(maxProduct([-4, -3, -2])).toBe(12);
  expect(maxProduct([-4, -3, -2, -3])).toBe(72);
  expect(maxProduct([-4, 3, -2, 3])).toBe(72);
  expect(maxProduct([-1, -2, -9, -6])).toBe(108);
  expect(maxProduct([-1, -2, -9, -6, -1])).toBe(108);
  expect(maxProduct([-1, 2, 9, -6, -1])).toBe(108);
  expect(maxProduct([-1, 2, -9, 6, -1])).toBe(108);
});
