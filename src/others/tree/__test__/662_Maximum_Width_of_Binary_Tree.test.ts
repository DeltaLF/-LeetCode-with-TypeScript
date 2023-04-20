import {
  widthOfBinaryTree,
  TreeNode,
} from "../662_Maximum_Width_of_Binary_Tree";

it("finds the width of binary tree", () => {
  expect(widthOfBinaryTree(null)).toBe(0);
  // one
  const root = new TreeNode(0);
  expect(widthOfBinaryTree(root)).toBe(1);
  // two
  root.right = new TreeNode(2);
  expect(widthOfBinaryTree(root)).toBe(1);
  // three
  root.left = new TreeNode(1);
  expect(widthOfBinaryTree(root)).toBe(2);
  // four
  /*  
      0
     1 2
         6
   */
  root.right.right = new TreeNode(6);
  expect(widthOfBinaryTree(root)).toBe(2);
  root.right.left = new TreeNode(5);
  expect(widthOfBinaryTree(root)).toBe(2);
  root.left.left = new TreeNode(3);
  expect(widthOfBinaryTree(root)).toBe(4);
  root.left.right = new TreeNode(4);
  expect(widthOfBinaryTree(root)).toBe(4);
});
