import { countSubTrees } from "../1519_Number_of_Nodes_in_the_Sub-Tree_With_the_Same_Label";

it("counts sub trees", () => {
  // one
  expect(countSubTrees(1, [], "a")).toEqual([1]);
  expect(countSubTrees(1, [], "z")).toEqual([1]);
  // two
  expect(countSubTrees(2, [[0, 1]], "ab")).toEqual([1, 1]);
  expect(countSubTrees(2, [[0, 1]], "aa")).toEqual([2, 1]);
  // three
  expect(
    countSubTrees(
      3,
      [
        [0, 1],
        [1, 2],
      ],
      "abc"
    )
  ).toEqual([1, 1, 1]);
  expect(
    countSubTrees(
      3,
      [
        [0, 1],
        [1, 2],
      ],
      "abb"
    )
  ).toEqual([1, 2, 1]);
  expect(
    countSubTrees(
      3,
      [
        [0, 1],
        [1, 2],
      ],
      "aaa"
    )
  ).toEqual([3, 2, 1]);

  expect(
    countSubTrees(
      7,
      [
        [0, 1],
        [0, 2],
        [1, 4],
        [1, 5],
        [2, 3],
        [2, 6],
      ],
      "abaedcd"
    )
  ).toEqual([2, 1, 1, 1, 1, 1, 1]);
});
