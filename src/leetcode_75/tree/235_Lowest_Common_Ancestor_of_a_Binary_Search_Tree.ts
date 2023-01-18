/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
import { TreeNode } from "./tree.type";
function lowestCommonAncestor(root:TreeNode|null, p:TreeNode, q:TreeNode):TreeNode {
    while( !!root ){
        const pSide = p.val! > root.val!; // true for go right,  false for go left or eqaul
        const qSide = q.val! > root.val!; 
        if( p.val === root.val || q.val === root.val || pSide !== qSide){
            // reach one of target node or p,q are at different sides
            return root;
        }
        // p, q are on the same side
        if( pSide ){
            root = root?.right;
        }else{
            root = root?.left;
        }
    }
    // not suppose to execute this line
    return root!;
}

var lowestCommonAncestorUnoptimized = function(root:TreeNode, p:TreeNode, q:TreeNode):TreeNode {
    /*
           6
        /     \
       2       8
      / \     / \
     0   4   7   9
        / \
       3   5
  [6,2,8,0,4,7,9,null,null,3,5], p = 0, q = 3
  if we can list the source lists of a specific node
       0 <- 2 <- 6
  3 <- 4 <- 2 <- 6
  then go from 6 -> 2 -> different
   answer will be 2
   with BST: this is very easy to be done
     */

   function findNode(targetVal:number, node:TreeNode|null,ancestorTreeList:(TreeNode|null)[]=[]):(TreeNode|null)[]{
    if( !node ){
        // not found
        ancestorTreeList.push(null);
        return ancestorTreeList;
    }
    ancestorTreeList.push(node);
    if(  targetVal === node.val) return ancestorTreeList;
    if(  targetVal > node.val!){
        return findNode(targetVal, node.right, ancestorTreeList);
    }else{
        return findNode(targetVal, node.left, ancestorTreeList); 
    }
   }
   const pAncestor = findNode(p.val!, root);
   const qAncestor = findNode(q.val!, root);
   let lcaNode:TreeNode = root;
   for(let i=0; i < pAncestor.length || i < qAncestor.length ; i++){
    if( pAncestor[i] === qAncestor[i] && !!pAncestor[i] ){
        lcaNode = pAncestor[i]!;
    }else{
        break;
    }
   }
   return lcaNode;

};

export {lowestCommonAncestor};