import { minDiffInBST } from "../783_Minimum_Distance_Between_BST_Nodes";
import { TreeNode } from "../../../leetcode_75/tree/tree.type";

describe("finds the minDiffInBST", () => {
  test("tree with only left node", () => {
    // two
    const root = new TreeNode(0);
    root.left = new TreeNode(-100);
    expect(minDiffInBST(root)).toBe(100);
    // three
    root.left.left = new TreeNode(-200);
    expect(minDiffInBST(root)).toBe(100);
    // three
    root.left.left.left = new TreeNode(-201);
    expect(minDiffInBST(root)).toBe(1);
  });

  test("tree with only right node", () => {
    // two
    const root = new TreeNode(0);
    root.right = new TreeNode(100);
    expect(minDiffInBST(root)).toBe(100);
    // three
    root.right.right = new TreeNode(200);
    expect(minDiffInBST(root)).toBe(100);
    // three
    root.right.right.right = new TreeNode(201);
    expect(minDiffInBST(root)).toBe(1);
  });
  test("normal", () => {
    /*
    [90,69,null,49,89,null,52]
          90
          /
         69
        /  \
       49  89
         \
         52    
               
    */
    const root = new TreeNode(90);
    root.left = new TreeNode(69);
    root.left.left = new TreeNode(49);
    root.left.right = new TreeNode(89);
    root.left.left.right = new TreeNode(52);
    expect(minDiffInBST(root)).toBe(1);
  });
});
