import { distributeCookies } from "../2305_Fair_Distribution_of_Cookies";

it("distrubutes cookies", () => {
  expect(distributeCookies([1, 2], 2)).toBe(2);
  expect(distributeCookies([1, 1], 2)).toBe(1);

  expect(distributeCookies([1, 2, 3, 4, 5, 6, 7, 8], 2)).toBe(18);
  expect(distributeCookies([1, 2, 3, 4, 5, 6, 7, 8], 5)).toBe(8);
  expect(distributeCookies([1, 2, 3, 4, 5, 6, 7, 8], 8)).toBe(8);
});
