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
import { Queue } from "@datastructures-js/queue";
function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];
  const ans: number[][] = [];
  const queue = new Queue<TreeNode>();
  queue.enqueue(root);
  let isLeftToRight = true;
  while (queue.size() > 0) {
    const size = queue.size();
    ans.push([]);
    for (let i = 0; i < size; i++) {
      const node = queue.dequeue();
      if (node.left) queue.enqueue(node.left);
      if (node.right) queue.enqueue(node.right);
      ans[ans.length - 1][isLeftToRight ? i : size - i - 1] = node.val!;
    }
    isLeftToRight = !isLeftToRight;
  }
  return ans;
}

function zigzagLevelOrderTwoStacks(root: TreeNode | null): number[][] {
  /*
    [3,9,20,null,null,15,7,1,2,3,4]
    [[3],[20,9],[15,7],[4,3,2,1]]
             3
           9   20
              15  7
             1 2 3  4 
    BFT
    
     */
  if (!root) return [];
  const ans: number[][] = [];
  let stack: TreeNode[] = [];
  stack.push(root);
  let leftToRight = true;
  while (stack.length > 0) {
    const len = stack.length;
    const newStack: TreeNode[] = [];
    const levelArr: number[] = [];
    for (let i = 0; i < len; i++) {
      if (stack[i].left) {
        newStack.push(stack[i]!.left!);
      }
      if (stack[i].right) {
        newStack.push(stack[i]!.right!);
      }
      levelArr.push(stack[i]!.val!);
    }
    stack = newStack;
    ans.push(leftToRight ? levelArr : levelArr.reverse());
    leftToRight = !leftToRight;
  }

  return ans;
}

export { zigzagLevelOrder };
