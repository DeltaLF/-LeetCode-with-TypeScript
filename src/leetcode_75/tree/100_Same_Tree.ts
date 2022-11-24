/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
import { TreeNode } from "./tree.type";
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
 var isSameTree = function(p:TreeNode | null, q:TreeNode | null):boolean {
    if(!p && !q) return true
    if(!p || !q) return false
    // use preorder DFS 
    let result = true;
    /*
     p:
         0
        /
       1
     q:
         0
           \ 
             1

    */
    const preOrder = (node1:TreeNode, node2:TreeNode ) => {
        if(!result) return
        if(node1.val === node2.val){// continue only when they are identical
            if(!!node1.left && !!node2.left){
                preOrder(node1.left, node2.left);
            }
            if(!node1.left && !!node2.left || !!node1.left && !node2.left){
                result = false;
                return                
            }
            if(!!node1.right && !!node2.right){
                preOrder(node1.right, node2.right);
                
            }
            if(!node1.right && !!node2.right || !!node1.right && !node2.right){
                result = false;
                return                
            }
            return 
        }
        result =false
        return 
    }
    preOrder(p,q)
    return result
      
};

export {isSameTree};