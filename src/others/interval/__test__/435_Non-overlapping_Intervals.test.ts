import { eraseOverlapIntervals } from "../435_Non-overlapping_Intervals";

it("finds min eraseOverlapIntervals", () => {
  expect(eraseOverlapIntervals([[1, 1]])).toBe(0);
  //two
  expect(
    eraseOverlapIntervals([
      [1, 2],
      [2, 3],
    ])
  ).toBe(0);
  expect(
    eraseOverlapIntervals([
      [1, 1],
      [2, 3],
    ])
  ).toBe(0);
  expect(
    eraseOverlapIntervals([
      [1, 1],
      [1, 5],
    ])
  ).toBe(0);
  // three
  expect(
    eraseOverlapIntervals([
      [1, 2],
      [2, 3],
      [3, 4],
    ])
  ).toBe(0);

  expect(
    eraseOverlapIntervals([
      [1, 2],
      [1, 2],
      [2, 3],
    ])
  ).toBe(1);

  expect(
    eraseOverlapIntervals([
      [-52, 31],
      [-73, -26],
      [82, 97],
      [-65, -11],
      [-62, -49],
      [95, 99],
      [58, 95],
      [-31, 49],
      [66, 98],
      [-63, 2],
      [30, 47],
      [-40, -26],
    ])
  ).toBe(7);
});
