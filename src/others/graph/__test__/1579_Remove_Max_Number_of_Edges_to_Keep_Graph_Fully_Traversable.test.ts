import { maxNumEdgesToRemove } from "../1579_Remove_Max_Number_of_Edges_to_Keep_Graph_Fully_Traversable";

it("finds maxNumEdgesToRemove", () => {
  expect(
    maxNumEdgesToRemove(3, [
      [3, 1, 2],
      [3, 2, 3],
    ])
  ).toBe(0);

  expect(
    maxNumEdgesToRemove(3, [
      [3, 1, 2],
      [3, 2, 3],
      [1, 2, 3],
      [1, 3, 1],
      [2, 1, 2],
    ])
  ).toBe(3);

  expect(
    maxNumEdgesToRemove(4, [
      [3, 1, 2],
      [3, 2, 3],
      [1, 1, 4],
      [2, 1, 4],
      [2, 1, 2],
      [2, 2, 3],
      [3, 1, 4],
    ])
  ).toBe(4);
  expect(
    maxNumEdgesToRemove(4, [
      [3, 1, 2],
      [3, 2, 3],
      [1, 1, 3],
      [1, 2, 4],
      [1, 1, 2],
      [2, 3, 4],
    ])
  ).toBe(2);
  expect(
    maxNumEdgesToRemove(10000, [
      [3, 2, 3],
      [1, 1, 2],
      [2, 3, 4],
    ])
  ).toBe(-1);
});
