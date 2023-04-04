import { partitionString } from "../2405_Optimal_Partition_of_String";

it("finds the minimum parttion string count", () => {
  // one
  expect(partitionString("a")).toBe(1);
  // two
  expect(partitionString("ab")).toBe(1);
  expect(partitionString("aa")).toBe(2);
  // three
  expect(partitionString("abc")).toBe(1);
  expect(partitionString("abb")).toBe(2);
  expect(partitionString("aac")).toBe(2);
  expect(partitionString("aaa")).toBe(3);
});
