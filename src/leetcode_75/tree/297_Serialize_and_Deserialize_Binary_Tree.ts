/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

import { TreeNode } from "./tree.type";

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
 var serialize = function(root:TreeNode|null):string {
    /*
     use preorder DFT
     use two nulls for leaves without left, right nodes
     helpers:
       take node and turn into arr with values or nulls
    */        
   if(!root) return '[]'
   const arr:(number|null)[] = [];
   
   /*
     1
    / \
   2   3
  / \ / \
 n  n 4  5
 [1, 2, null, null, 3, 4,null ,null, 5]
   */

   const helper = (node:TreeNode|null):void => {
    if(!node){
        arr.push(null);
    }else{
        const val = node!.val;
        arr.push(val);
        helper(node.left);
        helper(node.right);
    }
    
   }
   helper(root);
   // remove dummy nulls
   let i = arr.length -1;
   while(i>0){
    if(arr[i]===null){
        arr.pop();
        i--;
    }else{
        break;
    }
   }
   return JSON.stringify(arr);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data:string):TreeNode|null {
    /*
    1. preOrder DFT to recover
    2. two null means is a leaf
    */
   const arr:(number|null)[] = JSON.parse(data);
   if(arr.length === 0 || arr[0] === null  ) return null;
   /*
     1
    / \
   2   3
  / \ / \
 n  n 4  5
     / \
    n  n
 [1, 2, null, null, 3, 4,null ,null, 5]

        1
    /       \
   2         4
  / \       / \
 n   3      5  6
           / \
          n  n
 [1, 2, null, 3,null,null, 4, 5,null,null,6] */
//  [1,2,null,null,null,null,3]
   const recover = ():TreeNode|null => {
    const val = arr.shift();
    if(val === null || val === undefined) return null
    const node = new TreeNode(val);
    node.left = recover();
    node.right = recover();
    return node;
   }
   return recover();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */



/*
it takes too much sapces to record useless info (nulls), shouldn't use BFT

 var serialize = function(root:TreeNode|null):string {
    // travsersal then stringfiy
    // try preOrder BFT
    if(!root ) return '[]';
    let queue:(TreeNode|null)[] = [];
    const result:(number|null)[] = []
    let levelArr:(TreeNode|null)[] =[];
    queue.push(root);

    while(queue.length > 0){
        let nullCount = 0;
        levelArr = []
        for(let node of queue){
            result.push(!!node? node.val : null)
    
            if(node && node.left){
                levelArr.push(node.left);
            }else{
                levelArr.push(null);
                nullCount++
            }
            if(node && node.right){
                levelArr.push(node.right);
            }else{
                levelArr.push(null);
                nullCount++
            }

        }
        if(nullCount === levelArr.length) break
        queue = levelArr;
        }

        let i =result.length -1;
       while(i >0){
        if(result[i] === null){
            result.pop()
            i--;
        }else{
            break
        }
       }

    return JSON.stringify(result);
};

 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */

/*
     1
    / \
   2   3
  / \ / \
 n  n 4  5

var deserialize = function(data:string):TreeNode|null {
    // [1,2,null,null,3 ,4,5] BFT 
    const arr:(string|null)[] = JSON.parse(data);
    if(arr.length === 0) return null
    let queue:(TreeNode|null)[] =[];
    const head = parseInt(arr.shift()!);
    const root = new TreeNode(head);
    queue.push(root)
    while(arr.length > 0){
        // an array contians nodes in the same tree level(depth)
        const levelArray:(TreeNode|null)[] = []
        for(let node of queue){
            const left = arr.shift()
            const right = arr.shift()
            if(!node){
                // empty node should also occupy space
                levelArray.push(null);
                levelArray.push(null);
                continue
            }
            let leftNode:TreeNode|null = null
            let rightNode:TreeNode|null = null
            if(left !==null && left !== undefined){
                leftNode = new TreeNode(parseInt(left));
            }
            if(right !==null && right !== undefined){
                rightNode = new TreeNode(parseInt(right));
            }
            node.left =leftNode;
            node.right = rightNode
            levelArray.push(leftNode);
            levelArray.push(rightNode);
        }
        queue = levelArray;
    }
    return root
};
*/

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

export {serialize, deserialize}


