import { buildTree } from "../105_Construct_Binary_Tree_from_Preorder_and_Inorder_Traversal";
import { TreeNode } from "../tree.type";
it('tests buildTree function',()=>{
    const root = new TreeNode(3);
    root.left = new TreeNode(9);
    root.right = new TreeNode(20)
    root.right.left = new TreeNode(15)
    root.right.right = new TreeNode(7)
    expect(buildTree([3,9,20,15,7], [9,3,15,20,7])).toEqual(root);
})