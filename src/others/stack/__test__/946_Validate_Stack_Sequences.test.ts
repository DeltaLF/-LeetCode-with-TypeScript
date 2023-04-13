import { validateStackSequences } from "../946_Validate_Stack_Sequences";

it("validates stack sequences", () => {
  // one
  expect(validateStackSequences([0], [0])).toBe(true);
  // two
  expect(validateStackSequences([0, 1], [0, 1])).toBe(true);
  expect(validateStackSequences([1, 0], [1, 0])).toBe(true);
  // three
  expect(validateStackSequences([0, 1, 2], [0, 1, 2])).toBe(true);
  expect(validateStackSequences([0, 1, 2], [0, 2, 1])).toBe(true);
  expect(validateStackSequences([0, 1, 2], [2, 1, 0])).toBe(true);
  expect(validateStackSequences([0, 1, 2], [1, 2, 0])).toBe(true);
  expect(validateStackSequences([0, 1, 2], [1, 0, 2])).toBe(true);

  expect(validateStackSequences([0, 1, 2], [2, 0, 1])).toBe(false);
});
