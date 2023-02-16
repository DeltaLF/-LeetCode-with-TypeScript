import { numOfMinutes } from "../1376_Time_Needed to_Inform_All_Employees";

it("finds the numOfMinutes", () => {
  // one
  expect(numOfMinutes(1, 0, [-1], [100])).toBe(0);
  expect(numOfMinutes(1, 0, [-1], [10])).toBe(0);
  // two
  expect(numOfMinutes(2, 0, [-1, 0], [100, 100])).toBe(100);
  expect(numOfMinutes(2, 0, [-1, 0], [1, 100])).toBe(1);
  expect(numOfMinutes(2, 0, [-1, 0], [100, 1])).toBe(100);
  // three
  expect(numOfMinutes(3, 2, [2, 0, -1], [1, 100, 100])).toBe(101);
  expect(numOfMinutes(3, 2, [2, 0, -1], [100, 1, 100])).toBe(200);

  expect(
    numOfMinutes(
      8,
      0,
      [-1, 5, 0, 6, 7, 0, 0, 0],
      [89, 0, 0, 0, 0, 523, 241, 519]
    )
  ).toBe(612);
});
