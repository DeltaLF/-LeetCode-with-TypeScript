import { Queue } from "datastructures-js";

//Definition for a binary tree node.
export class TreeNode {
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
             0
     0                 0
 n      0         0        n
     n    0     0   n
        n  0   0  n    
         n  0 0  n


*/
function widthOfBinaryTree(root: TreeNode | null): number {
  /*
    Input: root = [1,3,2,5,3,null,9]
    Output: 4
          1
        3   2
      5  3 n  9

         0
        1  2
      3 4  5 6

          n
        /   \
      2n+1 2n+2

    bft
    pass down the current position: n left:2n+1 right 2n+2
    evalute the max width in every level
     */
  if (!root) return 0;
  let maxWidth = BigInt(0);
  const q = new Queue<[TreeNode, bigint]>();
  q.enqueue([root, BigInt(0)]);
  while (q.size() > 0) {
    const size = q.size();
    let left = BigInt(-1);
    let right = BigInt(-1);
    // iterate through one layer
    for (let i = 0; i < size; i++) {
      const [node, pos] = q.dequeue();
      if (i === 0) left = pos;
      right = pos;
      if (node.left) q.enqueue([node.left, BigInt(2) * pos + BigInt(1)]);
      if (node.right) q.enqueue([node.right, BigInt(2) * pos + BigInt(2)]);
    }
    // evaluate the width of the layer
    maxWidth =
      right - left + BigInt(1) > maxWidth ? right - left + BigInt(1) : maxWidth;
    // Math.max(maxWidth, right - left + 1);
  }

  return Number(maxWidth);
}

export { widthOfBinaryTree };
