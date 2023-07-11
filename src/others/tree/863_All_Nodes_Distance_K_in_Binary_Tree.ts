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

import { Queue } from "datastructures-js";

function distanceK(
  root: TreeNode | null,
  target: TreeNode,
  k: number
): number[] {
  /*
    Input: root = [1], target = 1, k = 3
Output: []

1. transform tree to map
2. bft
 */
  if (!root) return [];
  const map: number[][] = [];
  for (let i = 0; i <= 500; i++) {
    map[i] = [];
  }
  function dft(node = root!) {
    if (!node.left && !node.right) return;
    const val = node.val;
    if (node.left) {
      const left = node.left.val!;
      map[left].push(val);
      map[val].push(left);
      dft(node.left);
    }
    if (node.right) {
      const right = node.right.val!;
      map[right].push(val);
      map[val].push(right);
      dft(node.right);
    }
  }
  dft();
  const visited = new Array(501).fill(false);
  const q = new Queue<number>();
  q.enqueue(target.val);
  visited[target.val] = true;
  let dist = 0;
  const res: number[] = [];
  while (q.size() > 0 && dist <= k) {
    const size = q.size();
    for (let i = 0; i < size; i++) {
      const node = q.dequeue()!;
      if (dist === k) {
        res.push(node);
      }
      for (const adjNode of map[node]) {
        if (!visited[adjNode]) {
          visited[adjNode] = true;
          q.enqueue(adjNode);
        }
      }
    }
    dist++;
  }
  return res;
}

export { distanceK };
