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
import { Queue } from "@datastructures-js/queue";
import { TreeNode } from "../../leetcode_75/tree/tree.type";

function reverseOddLevels(root: TreeNode | null): TreeNode | null {
  // it can also be solved by DFT
  /*
    Input: root = [0,1,2,0,0,0,0,1,1,1,1,2,2,2,2]
    Output: [0,2,1,0,0,0,0,2,2,2,2,1,1,1,1]
    go bft and swap at every odd level
               0
           1        2
        3    4    5    6             
     7  8  9 10  11 12 13 14
              
              0
         2
  5    6      
     */
  if (!root) return null;
  let level = 0;
  let levelArr: TreeNode[] = [];
  const queue = new Queue<TreeNode>();
  queue.enqueue(root);
  while (queue.size() > 0) {
    const size = queue.size();
    // iterate through all the same level
    if (level % 2 === 1) {
      levelArr = queue.toArray();
      for (let i = 0; i < size / 2; i++) {
        [levelArr[i].val, levelArr[size - 1 - i].val] = [
          levelArr[size - 1 - i].val,
          levelArr[i].val,
        ];
      }
    }
    for (let i = 0; i < size; i++) {
      const node = queue.dequeue();
      if (node.left) queue.enqueue(node.left);
      if (node.right) queue.enqueue(node.right);
    }
    level++;
  }

  return root;
}

export { reverseOddLevels };
