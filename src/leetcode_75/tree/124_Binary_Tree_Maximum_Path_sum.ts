/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
class TreeNode{
    public selected?:boolean = false;
    public val:number=0;
    public left:TreeNode|null = null;
    public right:TreeNode|null = null;
    constructor(val?:number, left?:TreeNode, right?:TreeNode) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)}
}
/**
 * @param {TreeNode} root
 * @return {number}
 */

// recap postOrder
 const postOrder = (root:TreeNode):void =>{
    const arr:TreeNode[] = [];
    const helper = (node:TreeNode)=>{
        if(!!node.left) helper(node.left)
        if(!!node.right) helper(node.right)
        arr.push(node);
    }
    helper(root)
}

/*
thought: split this task into 2 steps
1. recreate a tree the node value is the maximum summation of its child path
example:
    -10
    /  \
   9    20
  / \   / \
3    10 15  7

summation tree make by post order traversal
     25*
    /  \
   19    35*
  / \   /  \
3    5*15*   7

2. the maxium is the summation of two adjecent node
(must not select two marked number)
(watch: 15 can not be reseleted, maybe mark the selected node to -Infinity)

*/ 

var maxPathSum = function(root:TreeNode):number{
    let max = -Infinity
    const findMax = (node:TreeNode| null):number=>{
        // apply post order traversal so y, z have alreadly been optimized
        if(!node) return 0;
        const maxLeft = findMax(node.left)
        const maxRight = findMax(node.right)
        /*
           x
          / \
         y   z
         when we are at x node, there are 4 options to be considered
           go straight
           1. only take x
           2. take the left path: x + y
           3. take the right path: x + z
           turn around
           4. take both left and right: x + y + z 
        */
        const straight = Math.max(node.val , node.val + maxLeft, node.val + maxRight);
        const turnAround = node.val + maxLeft + maxRight;
        max = Math.max(max, straight, turnAround);
        return straight;
    }
    findMax(root);
    return max
}


var maxPathSumII = function(root:TreeNode):number {

    /*
     1
    / \
   2   3 
    */
    const sumTree = (node:TreeNode):TreeNode =>{
        // only node is original tree
        // leftNode, rightNode, are both belonging to sumTree
        let leftNode:TreeNode | null = null;  
        let rightNode:TreeNode | null = null; 
        if(!!node.left) leftNode = sumTree(node.left);
        if(!!node.right) rightNode = sumTree(node.right);
        // update parent node state
        if(!leftNode && !rightNode) return new TreeNode(node.val);
        if(!leftNode && !!rightNode) {
            if(rightNode.val < 0){
                return new TreeNode(node.val)
            }
            rightNode!.selected = true;
             const newNode = new TreeNode( node.val + rightNode.val)
             newNode.right = rightNode;
             return newNode;
        }
        if(!!leftNode && !rightNode){
            if(leftNode.val < 0){
                return new TreeNode(node.val)
            }
            leftNode!.selected = true;
            const newNode = new TreeNode( leftNode.val)
            newNode.left = leftNode;
            return newNode;
        }
        const selectedNode = leftNode!.val > rightNode!.val ? leftNode! : rightNode!;
        if(selectedNode.val < 0){
            return new TreeNode(node.val)
        }
        selectedNode.selected = true;
        const newNode = new TreeNode( node.val + selectedNode!.val);
        newNode.left = leftNode
        newNode.right = rightNode
        return newNode

    }
    const sumTreeNode = sumTree(root);
    sumTreeNode.selected = true;
    // step 2: find maximum
    let maximum=-Infinity
    const findMax = (node:TreeNode):void=>{
        if(!!node.left) findMax(node.left)
        if(!!node.right) findMax(node.right)
        
        // to prevent dupliated, we cannot use two selected number
        let leftSum:number = node.val + (!!node?.left?.val ? node!.left!.val : 0);
        if(node.selected && node?.left?.selected) leftSum = - Infinity
        let rightSum:number = node.val + (!!node?.right?.val ? node!.right!.val : 0);
        if(node.selected && node?.right?.selected) rightSum = - Infinity
        maximum = Math.max(maximum, node.val,leftSum, rightSum ); 
        // single ndoe might be larger then the combination of adajecnt nodes
    }
    findMax(sumTreeNode);


    return maximum
    
};

export {maxPathSum, TreeNode}