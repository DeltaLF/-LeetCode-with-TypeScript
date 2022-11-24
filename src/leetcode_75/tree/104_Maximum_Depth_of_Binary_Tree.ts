/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */


import {TreeNode} from "./tree.type"

/**
 * @param {TreeNode} root
 * @return {number}
 */


 var maxDepth = function(root:TreeNode | null):number {
    // use inorder trversal to find out the depth
    if(!root) return 0;    
    let currentDepth = 0;
    let maxDepth = currentDepth;
    const traversal = (node:TreeNode) => {
        currentDepth +=1;
        maxDepth = Math.max(maxDepth, currentDepth);
        if(!!node.left){
            traversal(node.left);
            currentDepth -= 1
        }
        if(!!node.right){
            traversal(node.right);
            currentDepth -= 1
        }
    }
    traversal(root);
    return maxDepth
};

export {maxDepth}