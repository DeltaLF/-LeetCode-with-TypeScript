import { shuffle } from "../1470_Shuffle_the_Array";

it("tests shuffle fuction", () => {
  expect(shuffle([1, 2], 1)).toEqual([1, 2]);
  expect(shuffle([1, 2, 3, 4], 2)).toEqual([1, 3, 2, 4]);
  expect(shuffle([1, 2, 3, 4, 5, 6], 3)).toEqual([1, 4, 2, 5, 3, 6]);

  expect(shuffle([2, 5, 1, 3, 4, 7], 3)).toEqual([2, 3, 5, 4, 1, 7]);
});
