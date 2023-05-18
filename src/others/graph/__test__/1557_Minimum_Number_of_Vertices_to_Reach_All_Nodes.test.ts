import { findSmallestSetOfVertices } from "../1557_Minimum_Number_of_Vertices_to_Reach_All_Nodes";

it("findSmallestSetOfVertices", () => {
  expect(findSmallestSetOfVertices(1, [])).toEqual([0]);
  //two
  expect(findSmallestSetOfVertices(2, [[0, 1]])).toEqual([1]);
  expect(findSmallestSetOfVertices(2, [[1, 0]])).toEqual([1]);
});
