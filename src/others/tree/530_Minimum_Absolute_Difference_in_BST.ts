// Definition for a binary tree node.
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

/*
   4
 2   6
1 3

2

*/

function getMinimumDifference(root: TreeNode | null): number {
  let diff = Infinity;
  let prev = Infinity;
  let curr = Infinity;
  function inorderDFT(node = root) {
    if (!node) return;
    if (node.left) inorderDFT(node.left);
    prev = curr;
    curr = node.val;
    diff = Math.min(Math.abs(curr - prev), diff);
    if (node.right) inorderDFT(node.right);
  }
  inorderDFT();
  return diff;
}
