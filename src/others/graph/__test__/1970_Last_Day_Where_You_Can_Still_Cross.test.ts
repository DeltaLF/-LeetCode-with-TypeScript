import { latestDayToCross } from "../1970_Last_Day_Where_You_Can_Still_Cross";

it("finds latestDayToCross", () => {
  expect(
    latestDayToCross(2, 2, [
      [1, 1],
      [2, 2],
      [1, 2],
      [2, 1],
    ])
  ).toBe(1);
});
