import { minSpeedOnTime } from "../1870_Minimum_Speed_to_Arrive_on_Time";

it("finds minSpeedOnTime", () => {
  expect(minSpeedOnTime([1, 1, 1], 3)).toBe(1);
  expect(minSpeedOnTime([1, 20, 300], 3)).toBe(300);

  expect(
    minSpeedOnTime([1, 1, 1, 2, 5, 4, 5, 45, 4, 5, 5, 4, 4, 5, 45, 45], 15)
  ).toBe(-1);

  expect(minSpeedOnTime([1, 1, 100000], 2.01)).toBe(10000000);
});
