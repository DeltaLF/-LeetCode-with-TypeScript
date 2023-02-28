import {
  findDuplicateSubtrees,
  TreeNode,
} from "../652_Find_Duplicate_Subtrees";

it("finds duplicate substrees", () => {
  const root = new TreeNode(0);
  expect(findDuplicateSubtrees(root)).toEqual([]);
  root.left = new TreeNode(1);
  expect(findDuplicateSubtrees(root)).toEqual([]);
  root.right = new TreeNode(1);
  expect(findDuplicateSubtrees(root)).toEqual([root.left]);
});
