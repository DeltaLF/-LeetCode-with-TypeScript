import { SummaryRanges } from "../352_Data_Stream_as_Disjoint_Intervals";

it("tests SummaryRanges stream class", () => {
  const sr = new SummaryRanges();
  sr.addNum(1);
  expect(sr.getIntervals()).toEqual([[1, 1]]);
  // ignored if input duplicated number
  sr.addNum(1);
  expect(sr.stack).toEqual([1]);
  expect(sr.getIntervals()).toEqual([[1, 1]]);

  sr.addNum(7);
  expect(sr.stack).toEqual([1, 7]);
  expect(sr.getIntervals()).toEqual([
    [1, 1],
    [7, 7],
  ]);

  sr.addNum(2);
  expect(sr.stack).toEqual([1, 2, 7]);
  expect(sr.getIntervals()).toEqual([
    [1, 2],
    [7, 7],
  ]);

  sr.addNum(6);
  expect(sr.stack).toEqual([1, 2, 6, 7]);
  expect(sr.getIntervals()).toEqual([
    [1, 2],
    [6, 7],
  ]);

  sr.addNum(0);
  expect(sr.stack).toEqual([0, 1, 2, 6, 7]);
  expect(sr.getIntervals()).toEqual([
    [0, 2],
    [6, 7],
  ]);
});
