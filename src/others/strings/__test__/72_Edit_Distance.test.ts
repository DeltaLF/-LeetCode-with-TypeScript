import { minDistance } from "../72_Edit_Distance";

it("finds the min operations needed to change word", () => {
  expect(minDistance("abc", "hic")).toBe(2);
  expect(minDistance("intention", "execution")).toBe(5);
});
