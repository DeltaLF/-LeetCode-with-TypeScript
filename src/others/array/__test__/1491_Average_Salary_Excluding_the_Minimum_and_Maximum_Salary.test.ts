import { average } from "../1491_Average_Salary_Excluding_the_Minimum_and_Maximum_Salary";

it("finds average", () => {
  // 3
  expect(average([1, 2, 3])).toBe(2);
  expect(average([1, 2, 3, 4])).toBe(2.5);
  expect(average([1, 2, 3, 4, 5])).toBe(3);
});
