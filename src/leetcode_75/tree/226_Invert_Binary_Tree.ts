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
 * @param {TreeNode} root
 * @return {TreeNode}
 */
 var invertTreeII = function(root:TreeNode|null):TreeNode|null {
    if(!root) return root
    const revertHelper = (arr:TreeNode[]):void=>{
        for(let i=0;i<arr.length;i++){
            [arr[i].left,arr[i].right] =[arr[i].right, arr[i].left]
        }
        return 
    }

    // Breadth First Traversal
    let node:TreeNode | null = root;
    // iterate through with bft
    let layerArr:TreeNode[] = [];
    layerArr.push(node);
    revertHelper(layerArr);

    while(layerArr.length > 0){ // iterate through different layer
        const newLayerArr:TreeNode[] =[]
        for(let i=0;i<layerArr.length;i++){ // iterate through single layer
            if(!!layerArr[i].left) newLayerArr.push(layerArr[i].left!);
            if(!!layerArr[i].right) newLayerArr.push(layerArr[i].right!);
        }

        revertHelper(newLayerArr);
        layerArr = newLayerArr;
        /*
        
        let say we go to layer 3
        // wrong approach: because before we swapped layer 4, layer will be swapped first!
        // simple solution: we just need to focus on every node and only swap its children
        [  1  ,  3 ,   6  ,   9  ]
          / \   /\    / \    /\
         1l 1r 3l 3r  6l 6r 9l 9r
          l ->               <- r
          start_l <->  end_r
          start_r <->  end_l
            ++          --
        what if the tree is incomplete no problem
           5
          / \ 
         3   7
        / \ / \ 
       0  n 6  9 
         */
    }

    return root;
};



const invertTree= (root:TreeNode|null):TreeNode|null => {
    if(!root) return root;
    [root.left,root.right] = [root.right, root.left];
    if(!!root.left) invertTreeII(root.left);
    if(!!root.right) invertTreeII(root.right);
    return root;
    /*
    we only need to focus on each ndoe's children
    0      5
          / \ 
    1    3   7
        / \ / \ 
    2  0  4 6  9 
    
    swap 1
    0      5
          / \ 
    1    7   3
        / \ / \ 
    2  6  9 0  4 

    swap 2
    0      5
          / \ 
    1    7   3
        / \ / \ 
    2  9  6 4  0 
    
    */    

}


export {invertTree, invertTreeII}