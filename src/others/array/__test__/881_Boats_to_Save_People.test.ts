import { numRescueBoats } from "../881_Boats_to_Save_People";

it("finds the minimum boats needed", () => {
  // one
  expect(numRescueBoats([5], 5)).toBe(1);
  expect(numRescueBoats([5], 6)).toBe(1);
  // two
  expect(numRescueBoats([5, 3], 5)).toBe(2);
  expect(numRescueBoats([5, 8], 15)).toBe(1);
  // three
  expect(numRescueBoats([8, 3, 5], 8)).toBe(2);
  expect(numRescueBoats([8, 4, 5], 8)).toBe(3);
  expect(numRescueBoats([8, 3, 5], 80)).toBe(2);
});
