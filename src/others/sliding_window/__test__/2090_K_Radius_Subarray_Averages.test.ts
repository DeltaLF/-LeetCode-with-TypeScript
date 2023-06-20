import { getAverages } from "../2090_K_Radius_Subarray_Averages";

it("gets averages", () => {
  // one
  expect(getAverages([1], 0)).toEqual([1]);
  expect(getAverages([1], 1)).toEqual([-1]);
  // two
  expect(getAverages([1, 2], 0)).toEqual([1, 2]);
  expect(getAverages([1, 2], 1)).toEqual([-1, -1]);
  // three
  expect(getAverages([1, 2, 3], 0)).toEqual([1, 2, 3]);
  expect(getAverages([1, 2, 3], 1)).toEqual([-1, 2, -1]);
  expect(getAverages([1, 2, 3], 2)).toEqual([-1, -1, -1]);
});
