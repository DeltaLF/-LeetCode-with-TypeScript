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

function isCompleteTree(root: TreeNode | null): boolean {
  // travese in order => from left to right and from top to bottom
  if (!root) return true; // invalid testcase
  const queue = new Queue<TreeNode | null>();
  let end = false;
  queue.push(root);
  while (queue.size() > 0) {
    const node = queue.pop();
    if (!node) {
      end = true;
    } else {
      if (end) return false;
      queue.enqueue(node.left);
      queue.enqueue(node.right);
    }
  }
  return true;
}
function isCompleteTreeCompliacted(root: TreeNode | null): boolean {
  /*
       root = [1,2,3,4,5,null,7]
            1
          2   3
        4  5    7
  
        BFT 
        if fail whever there is a node that only has right x Not consider all conditions
        BFT
        check every layer is complete 
        the tree is complete if all layer is full or only last layer is not full
  
          1
        2   n 
      3  n 
    4  n
  5             => it's inbalance

   1                     1
  2           vs        2 3
 3                     4
 
       */
  if (!root) return true; // invalid testcase
  const queue = new Queue<TreeNode>();
  let isFullLayer = true;
  let isLeftFull = true;
  queue.push(root);
  while (queue.size() > 0) {
    if (!isFullLayer) {
      while (queue.size()) {
        // check if all leaves
        const node = queue.dequeue();
        if (!!node.left || !!node.right) return false;
      }
      return isLeftFull;
    }
    const size = queue.size();
    for (let i = 0; i < size; i++) {
      const node = queue.pop();
      if (!node.left && !node.right) {
        isFullLayer = false;
        continue;
      }
      if (!isFullLayer) isLeftFull = false;
      if (!!node.left) queue.enqueue(node.left);
      if (!!node.right) queue.enqueue(node.right);
      if (!node.left || !node.right) isFullLayer = false;
      if (!node.left && !!node.right) return false;
    }
  }
  return true;
}

function isCompleteTreeFailed(root: TreeNode | null): boolean {
  /*
     root = [1,2,3,4,5,null,7]
          1
        2   3
      4  5    7

      Should I use BFT or DFT
      if DFT is applied: we can store the left deepth 
      whevner there is a node on the right hande side that is larger then left deepth=> not complete
      not easy

      what if we use BFT (actually DFT alos works)
      if fail whever there is a node that only has right 

        1
      2   n 
    3  n 
  4  n
5             => it's inbalance


     */

  function dft(node: TreeNode | null): boolean {
    if (!node) return true;
    if (!node.left && !!node.right) return false;
    return dft(node.left) && dft(node.right);
  }
  return dft(root);
}

export { isCompleteTree, TreeNode };
