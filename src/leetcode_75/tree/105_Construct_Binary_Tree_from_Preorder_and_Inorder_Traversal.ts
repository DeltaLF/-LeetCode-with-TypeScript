/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
import { TreeNode } from "./tree.type";
var buildTree = function(preorder:number[], inorder:number[]):TreeNode|null {

    /*
    Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
    we can know the subTree size by comparing pre[0] , and in[indexOf[pre[0]]]
    subTreeLeft = [9] [9]
    subTreeRight = [20,15,7] [15,20,7]
    */
    if(preorder.length === 0) return null;
    const rootVal = preorder[0]
    const rootIndFromInOrder = inorder.indexOf(rootVal); // it's also the left subTree size
    const root = new TreeNode(rootVal);
    root.left = buildTree( preorder.slice(1,1 + rootIndFromInOrder), inorder.slice(0,rootIndFromInOrder));
    root.right = buildTree(preorder.slice(1 + rootIndFromInOrder), inorder.slice(1 + rootIndFromInOrder));
    return root;
};

export {buildTree};