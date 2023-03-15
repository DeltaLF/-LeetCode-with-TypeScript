import {
  isCompleteTree,
  TreeNode,
} from "../958_Check_Completeness_of_a_Binary_Tree";

it("tests isCompleteTree or not", () => {
  const one = new TreeNode(0);
  expect(isCompleteTree(one)).toBe(true);
  // two
  one.right = new TreeNode(2);
  expect(isCompleteTree(one)).toBe(false);
  one.left = new TreeNode(1);
  expect(isCompleteTree(one)).toBe(true);
  /* 
     0
    1 2
   */
  one.left.left = new TreeNode(3);
  expect(isCompleteTree(one)).toBe(true);
  one.left.right = new TreeNode(4);
  expect(isCompleteTree(one)).toBe(true);

  // inbalance
  const inbalanceRoot = new TreeNode(0);
  inbalanceRoot.left = new TreeNode(1);
  expect(isCompleteTree(inbalanceRoot)).toBe(true);
  inbalanceRoot.left.left = new TreeNode(2);
  expect(isCompleteTree(inbalanceRoot)).toBe(false);
  const inbalanceRootRight = new TreeNode(0);
  inbalanceRootRight.right = new TreeNode(1);
  expect(isCompleteTree(inbalanceRootRight)).toBe(false);
  inbalanceRootRight.right.right = new TreeNode(2);
  expect(isCompleteTree(inbalanceRootRight)).toBe(false);
  /*
  [1,2,3,null,null,7,8]
    1
  2   3
     7 8
  */
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.right.left = new TreeNode(7);
  root.right.right = new TreeNode(8);
  expect(isCompleteTree(root)).toBe(false);
});
