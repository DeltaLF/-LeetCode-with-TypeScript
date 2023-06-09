import { nextGreatestLetter } from "../744_Find_Smallest_Letter_Greater_Than_Target";

it("nextGreatestLetter", () => {
  expect(nextGreatestLetter(["a", "a", "z", "z"], "a")).toBe("z");
  expect(nextGreatestLetter(["a", "a", "z", "z"], "z")).toBe("a");
});
