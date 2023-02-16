/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

import { TreeNode } from "./tree.type";
import { Queue } from "@datastructures-js/queue";
/**
 * @param {TreeNode} root
 * @return {number}
 */

function maxDepth(root: TreeNode | null): number {
  // try BFT
  if (!root) return 0;
  const queue = new Queue<TreeNode>();
  let depth = 0;
  queue.enqueue(root);
  while (queue.size() > 0) {
    const queueSize = queue.size();
    for (let i = 0; i < queueSize; i++) {
      const node = queue.dequeue();
      if (node.left) {
        queue.enqueue(node.left);
      }
      if (node.right) {
        queue.enqueue(node.right);
      }
    }
    depth++;
  }
  return depth;
}

function maxDepthDFT(root: TreeNode | null, depth: number = 1): number {
  if (!root) return depth - 1;
  return Math.max(
    maxDepthDFT(root.left, depth + 1),
    maxDepthDFT(root.right, depth + 1)
  );
}

var maxDepthOld = function (root: TreeNode | null): number {
  // use inorder trversal to find out the depth
  if (!root) return 0;
  let currentDepth = 0;
  let maxDepth = currentDepth;
  const traversal = (node: TreeNode) => {
    currentDepth += 1;
    maxDepth = Math.max(maxDepth, currentDepth);
    if (!!node.left) {
      traversal(node.left);
      currentDepth -= 1;
    }
    if (!!node.right) {
      traversal(node.right);
      currentDepth -= 1;
    }
  };
  traversal(root);
  return maxDepth;
};

export { maxDepth };
