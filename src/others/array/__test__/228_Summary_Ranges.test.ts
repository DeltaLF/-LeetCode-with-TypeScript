import { summaryRanges } from "../228_Summary_Ranges";

it("summaryRanges", () => {
  // one
  expect(summaryRanges([0])).toEqual(["0"]);
  // two
  expect(summaryRanges([0, 1])).toEqual(["0->1"]);
  expect(summaryRanges([0, 2])).toEqual(["0", "2"]);
  // three
  expect(summaryRanges([0, 1, 2])).toEqual(["0->2"]);
  expect(summaryRanges([0, 2, 3])).toEqual(["0", "2->3"]);
  expect(summaryRanges([0, 2, 5])).toEqual(["0", "2", "5"]);
});
