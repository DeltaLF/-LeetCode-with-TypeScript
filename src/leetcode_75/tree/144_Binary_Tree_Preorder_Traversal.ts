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
 * @return {number[]}
 */

import { TreeNode } from "./tree.type";

var preorderTraversal = function(root:TreeNode|null):number[] {
    if(!root) return [];
    const preOrder:number[] = [];
    function preOrderDFT(node:TreeNode){
        preOrder.push( node.val! );
        if(!!node.left) preOrderDFT(node.left);
        if(!!node.right) preOrderDFT(node.right);
    }
    preOrderDFT(root);
    return preOrder;
};

export {preorderTraversal};