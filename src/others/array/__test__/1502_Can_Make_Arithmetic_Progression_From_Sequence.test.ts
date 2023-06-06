import { canMakeArithmeticProgression } from "../1502_Can_Make_Arithmetic_Progression_From_Sequence";

test("canMakeArithmeticProgression", () => {
  expect(canMakeArithmeticProgression([1, 2])).toBe(true);
  expect(canMakeArithmeticProgression([2, 2])).toBe(true);
  //three
  expect(canMakeArithmeticProgression([1, 2, 3])).toBe(true);
  expect(canMakeArithmeticProgression([1, 3, 2])).toBe(true);
  expect(canMakeArithmeticProgression([3, 2, 1])).toBe(true);
  expect(canMakeArithmeticProgression([1, 1, 1])).toBe(true);
  expect(canMakeArithmeticProgression([1, 2, 4])).toBe(false);
});
