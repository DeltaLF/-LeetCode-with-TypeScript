import { zigzagLevelOrder } from "../103_Binary_Tree_Zigzag_Level_Order_Traversal";
import { TreeNode } from "../../../leetcode_75/tree/tree.type";

test("zigzaglevelOrder", () => {
  const root = new TreeNode(0);
  // 0
  expect(zigzagLevelOrder(null)).toEqual([]);
  // 1 level
  expect(zigzagLevelOrder(root)).toEqual([[0]]);
  // 2 levels
  root.left = new TreeNode(1);
  root.right = new TreeNode(2);
  expect(zigzagLevelOrder(root)).toEqual([[0], [2, 1]]);
  // 3 levels
  root.left.left = new TreeNode(3);
  root.left.right = new TreeNode(4);
  root.right.left = new TreeNode(5);
  root.right.right = new TreeNode(6);
  expect(zigzagLevelOrder(root)).toEqual([[0], [2, 1], [3, 4, 5, 6]]);
});
