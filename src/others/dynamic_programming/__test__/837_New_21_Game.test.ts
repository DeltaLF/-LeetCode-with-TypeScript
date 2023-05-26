import { new21Game } from "../#837_New_21_Game";

test("new21Game", () => {
  expect(Math.abs(new21Game(6707, 6047, 9446) - 0.13271)).toBeLessThan(
    10 ** -5
  );
  expect(new21Game(0, 0, 1)).toBe(1);
  expect(new21Game(12, 1, 10)).toBe(1);
});
