import { totalFruit } from "../904_Fruit_Into_Baskets";

it("find maximum of totalFruit", () => {
  //one
  expect(totalFruit([0])).toBe(1);
  // two
  expect(totalFruit([0, 0])).toBe(2);
  expect(totalFruit([0, 1])).toBe(2);
  // three
  expect(totalFruit([0, 0, 0])).toBe(3);
  expect(totalFruit([0, 0, 1])).toBe(3);
  expect(totalFruit([1, 0, 1])).toBe(3);
  expect(totalFruit([0, 1, 2])).toBe(2);
  // five
  expect(totalFruit([0, 0, 0, 0, 0])).toBe(5);
  expect(totalFruit([0, 1, 2, 3, 0])).toBe(2);
  expect(totalFruit([0, 0, 2, 3, 3])).toBe(3);

  expect(totalFruit([1, 0, 1, 1, 1, 1, 4, 1, 4, 1, 2, 3])).toBe(8);

  expect(
    totalFruit([1, 0, 1, 0, 1, 0, 1, 0, 1, 4, 1, 4, 1, 1, 4, 1, 4, 1, 2, 3])
  ).toBe(10);

  expect(totalFruit([1, 0, 1, 4, 1, 4, 1, 2, 3])).toBe(5);

  expect(
    totalFruit([
      14, 14, 1, 1, 14, 5, 14, 1, 14, 1, 5, 5, 1, 24, 7, 7, 8, 7, 7, 12, 12, 8,
      23, 8, 23, 8, 20, 10, 0, 17,
    ])
  ).toBe(5);
});
