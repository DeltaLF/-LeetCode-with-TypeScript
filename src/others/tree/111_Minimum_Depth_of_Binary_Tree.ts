/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function minDepth(root: TreeNode | null): number {
  if (!root) return 0;
  let minDepth = Infinity;
  function dft(node = root!, depth = 1): void {
    if (!node.right && !node.left) {
      minDepth = Math.min(minDepth, depth);
      return;
    }
    if (node.right) {
      dft(node.right, depth + 1);
    }
    if (node.left) {
      dft(node.left, depth + 1);
    }
  }
  dft();
  return minDepth;
}
