import { maxPathSum,TreeNode } from "../124_Binary_Tree_Maximum_Path_sum";

it('test maxPath sum',()=>{
    const root = new TreeNode(-10)
    expect(maxPathSum(root)).toEqual(-10)
    root.left = new TreeNode(9)
    expect(maxPathSum(root)).toEqual(9)
    root.right = new TreeNode(20)
    expect(maxPathSum(root)).toEqual(20)
    root.right.left = new TreeNode(15)
    root.right.right = new TreeNode(7)
    expect(maxPathSum(root)).toEqual(42)

    root.left.left = new TreeNode(3)
    root.left.right = new TreeNode(10)
    expect(maxPathSum(root)).toEqual(44)
    
    const rootII = new TreeNode(2);
    expect(maxPathSum(rootII)).toEqual(2);
    rootII.left = new TreeNode(-1);
    expect(maxPathSum(rootII)).toEqual(2);

})

it('tests maxPathSum with inbalance tree',()=>{
    const root = new TreeNode(-30)
    root.left = new TreeNode(5)
    root.left.left = new TreeNode(5)
    root.left.left.left = new TreeNode(5)
    root.left.left.left.left = new TreeNode(10)
    root.left.right = new TreeNode(26)
    expect(maxPathSum(root)).toEqual(51)
    root.right = new TreeNode(500);
    expect(maxPathSum(root)).toEqual(501)

})
it('tests maxPathSum with some more numbers',()=>{
    const root = new TreeNode(-240)
    root.left = new TreeNode(-500)
    root.right = new TreeNode(-476)
    root.left.left = new TreeNode(87)
    expect(maxPathSum(root)).toEqual(87)

})