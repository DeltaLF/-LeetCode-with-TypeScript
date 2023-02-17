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

import { TreeNode } from "../../leetcode_75/tree/tree.type";

// this could be optimized
function minDiffInBST(root: TreeNode | null): number {
  /*
    Input: root = [1,0,48,null,null,12,49]
    Output: 1
     BST:    1
           /   \
          0   48
              /  \
             12   49
    traversal the tree and recover the array
    iterate through sroted array to find min diff 
     */
  if (!root) return 0;
  const array: number[] = [];
  function dft(node: TreeNode) {
    if (node.left) {
      dft(node.left);
    }
    array.push(node.val!);
    if (node.right) {
      dft(node.right);
    }
  }
  dft(root);
  let min = Infinity;
  for (let i = 0; i < array.length - 1; i++) {
    min = Math.min(min, array[i + 1] - array[i]);
  }
  return min;
}

export { minDiffInBST };
