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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
import {TreeNode} from "./tree.type";
var isSubtree = function(root:TreeNode, subRoot:TreeNode):boolean {
    // implement is same tree
    function isItSameTree(treeI:TreeNode|null,treeII:TreeNode|null):boolean{
        if(treeI === null && treeII === null) return true
        if(treeI === null || treeII === null) return false
        if(treeI.val !== treeII.val) return false;
        const left = isItSameTree(treeI.left, treeII.left);
        const right = isItSameTree(treeI.right, treeII.right )
        return left && right;
    }
    // iterate through root
    function dft(node:TreeNode|null):boolean{
        console.log("dft is called", node, subRoot)
        if(!node || node.val === null) return false
        const isSameTree:boolean = isItSameTree(node, subRoot);
        node.val = null;  // node val means visited
        console.log("isSSSSSSsame",isSameTree)
        if(isSameTree){
            console.log("rrrrrrreturn true")
            return true;
        }
        const left = dft(node.left);
        const right = dft(node.right);

        return left || right;
    }

    const result = dft(root)
    console.log("result", result)
    return result
};

export {isSubtree};