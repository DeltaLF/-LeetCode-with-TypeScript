import { Queue } from "datastructures-js";

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

function maxLevelSum(root: TreeNode | null): number {
  /*
    Input: root = [1,7,0,7,-8,null,null]
    Output: 2
    Explanation: 
        1
      7   0
    7 -8
    1
    7
    -1
    BFT
     */
  if (!root) return 0;
  let minlevel = 1;
  let max = -Infinity;
  let level = 1;
  const q = new Queue<TreeNode>();
  q.enqueue(root);
  while (q.size() > 0) {
    const size = q.size();
    let sum = 0;
    for (let i = 0; i < size; i++) {
      const node = q.dequeue();
      sum += node.val;
      if (node.left) q.enqueue(node.left);
      if (node.right) q.enqueue(node.right);
    }
    if (sum > max) {
      max = sum;
      minlevel = level;
    }
    level++;
  }

  return minlevel;
}

export { maxLevelSum };
