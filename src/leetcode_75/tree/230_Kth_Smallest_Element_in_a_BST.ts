/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
import { TreeNode } from "./tree.type";

var kthSmallest = function(root:TreeNode, k:number):number{
    // try iterate
    const stack:TreeNode[] = [];
    let node:null|TreeNode = root;
    while(!!node || stack.length > 0){
        while(!!node){
            stack.push(node);
            node = node.left;
        }
        node = stack.pop()!;
        k--;
        if(k === 0) return node.val!;
        node = node.right;
    }
    return NaN; // not suppose to happen
}

var kthSmallestRecursiveOptimized = function(root:TreeNode, k:number):number{
    // optimize kthSmallest by cutting out no needed variable
    let ans:number = root.val as number;
     function dft(node:TreeNode|null):void{
         if( !node || k <= 0 ) return;
         dft(node.left);
         k --;
         if( k === 0){
             ans = node.val!;
             return;
         }
         dft(node.right);
     }
     dft(root);
     return ans;
}

var kthSmallestNotOptimzed = function(root:TreeNode, k:number):number {
    /*
    root = [5,3,6,2,4,null,null,1], k = 3
    thought: should we iterate all the tree to determine the kth smallest?
    NO:
    we can do it with in-order DFT
          5
        /  \
       3    6
      / \    
    2    4
   /
  1
    */
   let count = 0;
   let ans:number = root.val as number;
    function dft(node:TreeNode|null):void{
        if( !node || count >= k ) return;
        dft(node.left);
        count++;
        if( count === k){
            ans = node.val!;
            return;
        }
        if(count >= k) return;
        dft(node.right);
    }
    dft(root);
    return ans;
};

export { kthSmallest};