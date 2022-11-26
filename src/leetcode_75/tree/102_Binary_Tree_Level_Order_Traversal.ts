/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
 import {  TreeNode as TreeNodeBasic } from "./tree.type";
 class TreeNode extends TreeNodeBasic{
     public level?:number;
     public left:TreeNode|null=null;
     public right:TreeNode|null=null;
 }
 /**
  * @param {TreeNode} root
  * @return {number[][]}
  */
  var levelOrder = function(root:TreeNode|null):number[][] {
     if(!root) return []
     root.level = 10;
     // tree broadth first traversal
     const queue:TreeNode[] =[]; 
     // use array to replace queue (simpler but less efficient)
     const result:number[][] = [];
     queue.push(root);
     root.level = 0
 
     // how to tell it's getting to next level?
     // 1. counting the node
     // 2. use extra variable to mark it
     while(queue.length > 0){
         const node = queue.shift();
         const level = node!.level!;
         if(!result[level]){
             result[level] = [node!.val]
         }else{
         result[level] = [...result[level],node!.val]}
         if(!!node?.left) {
             node.left.level = level + 1
             queue.push(node.left)
         };
         if(!!node?.right) {
             node.right.level = level + 1
             queue.push(node.right);}
     }
     return result
 };
 
 export {levelOrder,TreeNode}