import  {TreeNode, levelOrder} from "../102_Binary_Tree_Level_Order_Traversal"

it('tests levelOrder',()=>{
    // empty
    expect(levelOrder(null)).toEqual([]);
    const root = new TreeNode(9);
    // one
    expect(levelOrder(root)).toEqual([[9]])
    // two layers
    root.right = new TreeNode(5)
    expect(levelOrder(root)).toEqual([[9],[5]])
    // three layers
    root.left = new TreeNode(-1)
    root.left.left = new TreeNode(10)
    expect(levelOrder(root)).toEqual([[9],[-1,5],[10]])

})

it('tets levelOrder function with inbalance tree',()=>{
    const root = new TreeNode(0);
    root.left = new TreeNode(1)
    root.left.left = new TreeNode(2)
    root.left.left.left = new TreeNode(3)
    root.left.left.left.left = new TreeNode(4)
    root.left.left.left.left.left = new TreeNode(5)
    expect(levelOrder(root)).toEqual([[0],[1],[2],[3],[4],[5]])
})