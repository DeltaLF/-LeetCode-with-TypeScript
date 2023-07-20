import { asteroidCollision } from "../735_Asteroid_Collision";

it("predicts asteroidCollision", () => {
  // one
  expect(asteroidCollision([1])).toEqual([1]);
  // two
  expect(asteroidCollision([1, 2])).toEqual([1, 2]);
  expect(asteroidCollision([1, -2])).toEqual([-2]);
  expect(asteroidCollision([-3, 2])).toEqual([-3, 2]);
  expect(asteroidCollision([3, -2])).toEqual([3]);
  expect(asteroidCollision([-3, -3])).toEqual([-3, -3]);
  expect(asteroidCollision([3, -3])).toEqual([]);
  // three
  expect(asteroidCollision([1, 2, 3])).toEqual([1, 2, 3]);
  expect(asteroidCollision([1, -2, 3])).toEqual([-2, 3]);
  expect(asteroidCollision([1, 2, -3])).toEqual([-3]);
  expect(asteroidCollision([5, -2, -3])).toEqual([5]);
});
