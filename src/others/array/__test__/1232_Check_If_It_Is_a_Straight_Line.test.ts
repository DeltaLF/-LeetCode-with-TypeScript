import { checkStraightLine } from "../1232_Check_If_It_Is_a_Straight_Line";

it("checkStraightLine", () => {
  // two
  expect(
    checkStraightLine([
      [0, 0],
      [1, 1],
    ])
  ).toBe(true);
  //three
  expect(
    checkStraightLine([
      [0, 0],
      [0, 1],
      [0, -1],
    ])
  ).toBe(true);
  expect(
    checkStraightLine([
      [1, 1],
      [2, 2],
      [2, 0],
    ])
  ).toBe(false);
  expect(
    checkStraightLine([
      [0, 0],
      [1, 1],
      [2, 2],
    ])
  ).toBe(true);
  expect(
    checkStraightLine([
      [1, 1],
      [0, 0],
      [2, 2],
    ])
  ).toBe(true);
  expect(
    checkStraightLine([
      [2, 2],
      [0, 0],
      [1, 1],
    ])
  ).toBe(true);
  expect(
    checkStraightLine([
      [0, 0],
      [1, 1],
      [2, 3],
    ])
  ).toBe(false);

  expect(
    checkStraightLine([
      [0, 0],
      [0, 5],
      [5, 5],
      [5, 0],
    ])
  ).toBe(false);
});
