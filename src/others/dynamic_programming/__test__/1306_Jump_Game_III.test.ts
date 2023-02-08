import { canReach } from "../1306_Jump_Game_III";

it("tests canReach or not", () => {
  // one
  expect(canReach([0], 0)).toBe(true);
  expect(canReach([1], 0)).toBe(false);
  // two
  expect(canReach([0, 0], 0)).toBe(true);
  expect(canReach([0, 0], 1)).toBe(true);
  expect(canReach([1, 2], 0)).toBe(false);
  expect(canReach([1, 0], 0)).toBe(true);

  expect(canReach([4, 2, 3, 0, 3, 1, 2], 5)).toBe(true);
});
