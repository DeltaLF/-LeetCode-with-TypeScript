import { reverseOddLevels } from "../2415_Reverse_Odd_Levels_of_Binary_Tree";
import { TreeNode } from "../../../leetcode_75/tree/tree.type";

describe("test reverseOddLevels", () => {
  it("tests case of 3 layers", () => {
    const root = new TreeNode(0);
    root.left = new TreeNode(1);
    root.right = new TreeNode(2);

    root.left.left = new TreeNode(3);
    root.left.right = new TreeNode(4);
    root.right.left = new TreeNode(5);
    root.right.right = new TreeNode(6);
    reverseOddLevels(root);
    expect(root.val).toBe(0);
    expect(root.left.val).toBe(2);
    expect(root.right.val).toBe(1);
    expect(root.left.left.val).toBe(3);
    expect(root.left.right.val).toBe(4);
    expect(root.right.left.val).toBe(5);
    expect(root.right.right.val).toBe(6);
  });
});
