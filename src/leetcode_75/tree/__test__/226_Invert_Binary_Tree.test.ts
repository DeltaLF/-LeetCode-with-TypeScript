import { invertTree, invertTreeII } from "../226_Invert_Binary_Tree";
import { TreeNode } from "../tree.type";

describe("test invertTree", () => {
  it("test", () => {
    const root = new TreeNode(0);
    root.left = new TreeNode(1);
    const reverted = invertTree(root);
    expect(reverted!.val).toBe(0);
    expect(reverted!.right!.val).toBe(1);
  });

  it("tests inverTree", () => {
    // empty
    expect(invertTree(null)).toBeNull();
    const unReverted = new TreeNode(4);
    let root = new TreeNode(4);
    unReverted.left = new TreeNode(2);
    unReverted.right = new TreeNode(7);
    unReverted.left.left = new TreeNode(1);
    unReverted.left.right = new TreeNode(3);
    unReverted.right.left = new TreeNode(6);
    unReverted.right.right = new TreeNode(9);
    root.left = new TreeNode(2);
    root.right = new TreeNode(7);
    root.left.left = new TreeNode(1);
    root.left.right = new TreeNode(3);
    root.right.left = new TreeNode(6);
    root.right.right = new TreeNode(9);
    invertTree(root);
    expect(root.val).toEqual(unReverted.val);
    expect(root.left.val).toEqual(unReverted.right.val);
    expect(root.right.val).toEqual(unReverted.left.val);
    expect(root.left.left.val).toEqual(unReverted.right.right.val);
    expect(root.left.right.val).toEqual(unReverted.right.left.val);
    expect(root.right.left.val).toEqual(unReverted.left.right.val);
    expect(root.right.right.val).toEqual(unReverted.left.left.val);
  });
});
