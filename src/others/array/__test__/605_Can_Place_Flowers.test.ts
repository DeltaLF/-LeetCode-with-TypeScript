import { canPlaceFlowers } from "../605_Can_Place_Flowers";

it("tests avialable flowerbed", () => {
  // one
  expect(canPlaceFlowers([0], 0)).toBe(true);
  expect(canPlaceFlowers([0], 1)).toBe(true);
  expect(canPlaceFlowers([1], 0)).toBe(true);
  expect(canPlaceFlowers([1], 1)).toBe(false);
  // two
  expect(canPlaceFlowers([0, 0], 0)).toBe(true);
  expect(canPlaceFlowers([0, 0], 1)).toBe(true);
  expect(canPlaceFlowers([1, 0], 0)).toBe(true);
  expect(canPlaceFlowers([0, 1], 0)).toBe(true);
  expect(canPlaceFlowers([1, 0], 1)).toBe(false);
  expect(canPlaceFlowers([1, 0], 2)).toBe(false);
  expect(canPlaceFlowers([0, 0], 2)).toBe(false);
  // three
  expect(canPlaceFlowers([0, 0, 0], 0)).toBe(true);
  expect(canPlaceFlowers([0, 0, 0], 1)).toBe(true);
  expect(canPlaceFlowers([0, 0, 0], 2)).toBe(true);
  expect(canPlaceFlowers([0, 0, 0], 3)).toBe(false);
  expect(canPlaceFlowers([1, 0, 0], 0)).toBe(true);
  expect(canPlaceFlowers([1, 0, 0], 1)).toBe(true);
  expect(canPlaceFlowers([1, 0, 0], 2)).toBe(false);
  expect(canPlaceFlowers([0, 1, 0], 0)).toBe(true);
  expect(canPlaceFlowers([0, 1, 0], 1)).toBe(false);
  expect(canPlaceFlowers([1, 0, 1], 0)).toBe(true);
  expect(canPlaceFlowers([1, 0, 1], 1)).toBe(false);
});
