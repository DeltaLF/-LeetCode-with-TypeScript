import { isSymmetric, TreeNode } from "../101_Symmetric_Tree";

it("tests is symmetric or not", () => {
  const root = new TreeNode(0);
  // one
  expect(isSymmetric(root)).toBe(true);
  /*   0
        1
     */
  root.left = new TreeNode(1);
  expect(isSymmetric(root)).toBe(false);
  root.left.left = new TreeNode(2);
  expect(isSymmetric(root)).toBe(false);
  root.right = new TreeNode(1);
  expect(isSymmetric(root)).toBe(false);
  root.right.right = new TreeNode(2);
  expect(isSymmetric(root)).toBe(true);
  /*
        0
      1   1
     2     2
*/
  root.left.right = new TreeNode(3);
  expect(isSymmetric(root)).toBe(false);

  root.right.left = new TreeNode(3);
  expect(isSymmetric(root)).toBe(true);
});
