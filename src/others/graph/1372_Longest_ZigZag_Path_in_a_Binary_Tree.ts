//Definition for a binary tree node.
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

function longestZigZag(root: TreeNode | null): number {
  /*
      Input: root = [1,null,1,1,1,null,null,1,1,null,1,null,null,null,1,null,1]
      Output: 3
      Explanation: Longest ZigZag path in blue nodes (right -> left -> right).
           1
         n   1
           1   1
         1  n n  1
        1 n     1  n
       n n     n 1
                 n 1         
      1. memoMap
      2. dft

       1
    2     3

       */
  if (!root) return 0;
  let max = 0;
  // from 0: root 1: left 2: right
  function findZigZag(node: TreeNode, count = 0, from = 0) {
    // check left
    if (node.left) {
      const countLeft = from === 1 ? 1 : count + 1; // reset count if from left
      findZigZag(node.left, countLeft, 1);
    }
    // check right
    if (node.right) {
      const countRight = from === 2 ? 1 : count + 1; // reset count if from righ
      findZigZag(node.right, countRight, 2);
    }
    // udpate max
    max = Math.max(max, count);
  }

  findZigZag(root);
  return max;
}

export { longestZigZag, TreeNode };
