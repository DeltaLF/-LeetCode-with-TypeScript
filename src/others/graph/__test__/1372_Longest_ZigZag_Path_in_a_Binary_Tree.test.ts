import {
  longestZigZag,
  TreeNode,
} from "../1372_Longest_ZigZag_Path_in_a_Binary_Tree";

it("finds the longest ZigZag", () => {
  // one
  const root = new TreeNode(0);
  expect(longestZigZag(root)).toBe(0);
  // two
  root.left = new TreeNode(1);
  expect(longestZigZag(root)).toBe(1);
  root.right = new TreeNode(2);
  expect(longestZigZag(root)).toBe(1);
  // three
  root.left.left = new TreeNode(3);
  expect(longestZigZag(root)).toBe(1);
  root.left.right = new TreeNode(4);
  expect(longestZigZag(root)).toBe(2);
});
