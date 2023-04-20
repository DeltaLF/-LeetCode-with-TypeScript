import { areDeeplyEqual } from "../#2628_JSON_Deep_Equal";

it("tests whether two objects are deeply equal", () => {
  expect(areDeeplyEqual({ x: 1, y: 2 }, { x: 1, y: 2 })).toBe(true);
  expect(areDeeplyEqual({ y: 2, x: 1 }, { x: 1, y: 2 })).toBe(true);
  expect(
    areDeeplyEqual({ x: null, L: [1, 2, 3] }, { x: null, L: ["1", "2", "3"] })
  ).toBe(false);
  expect(areDeeplyEqual(true, false)).toBe(false);
  expect(areDeeplyEqual({ "0": 1 }, [1])).toBe(false);
  expect(areDeeplyEqual([1], [1, 2])).toBe(false);
  expect(areDeeplyEqual({ num: 3.1415 }, { num: 3.14 })).toBe(false);
});
