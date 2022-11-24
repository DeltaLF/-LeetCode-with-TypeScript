class TreeNode{
    public val:number=0;
    public left:TreeNode|null = null;
    public right:TreeNode|null = null;
    constructor(val?:number, left?:TreeNode, right?:TreeNode) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}


 export { TreeNode}