import { maxValue } from "../1751_Maximum_Number_of_Events_That_Can_Be_Attended_II";

it("finds max value", () => {
  //   one;
  expect(maxValue([[1, 2, 3]], 0)).toBe(0);
  expect(maxValue([[1, 2, 3]], 1)).toBe(3);
  expect(maxValue([[1, 2, 3]], 2)).toBe(3);
  // two
  expect(
    maxValue(
      [
        [1, 2, 3],
        [3, 4, 5],
      ],
      1
    )
  ).toBe(5);
  expect(
    maxValue(
      [
        [1, 2, 3],
        [3, 4, 5],
      ],
      2
    )
  ).toBe(8);
  expect(
    maxValue(
      [
        [1, 2, 3],
        [3, 4, 5],
      ],
      0
    )
  ).toBe(0);
  expect(
    maxValue(
      [
        [1, 3, 3],
        [3, 4, 5],
      ],
      2
    )
  ).toBe(5);

  expect(
    maxValue(
      [
        [67, 99, 2],
        [39, 45, 10],
        [11, 70, 59],
        [27, 49, 40],
        [30, 50, 98],
        [52, 63, 13],
        [10, 15, 80],
        [47, 66, 56],
        [54, 92, 100],
        [9, 57, 81],
        [26, 82, 39],
        [55, 62, 16],
        [22, 72, 48],
      ],
      2
    )
  ).toBe(198);
});
