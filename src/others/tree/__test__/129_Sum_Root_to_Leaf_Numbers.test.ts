import { sumNumbers, TreeNode } from "../129_Sum_Root_to_Leaf_Numbers";

it("finds sumNumbers from root to leaf", () => {
  const root = new TreeNode(1);
  expect(sumNumbers(root)).toBe(1);
  root.left = new TreeNode(2);
  expect(sumNumbers(root)).toBe(12);
  root.right = new TreeNode(3);
  expect(sumNumbers(root)).toBe(25);
  /* so far
        1
      2  3
     */
  root.left.left = new TreeNode(4);
  expect(sumNumbers(root)).toBe(137);
  // imblance
  const rootImbalance = new TreeNode(0);
  expect(sumNumbers(rootImbalance)).toBe(0);
  rootImbalance.right = new TreeNode(1);
  expect(sumNumbers(rootImbalance)).toBe(1);
  rootImbalance.right.right = new TreeNode(2);
  expect(sumNumbers(rootImbalance)).toBe(12);
  rootImbalance.right.right.right = new TreeNode(3);
  expect(sumNumbers(rootImbalance)).toBe(123);
});
