import { preorderTraversal } from "../144_Binary_Tree_Preorder_Traversal";
import { TreeNode } from "../tree.type";

it('preorder traverse tree structure',()=>{
    // empty
    expect(preorderTraversal(null)).toEqual([]);
    // one
    const node = new TreeNode(5);
    expect(preorderTraversal(node)).toEqual([5]);
    node.left = new TreeNode(4);
    expect(preorderTraversal(node)).toEqual([5,4]);
    node.right = new TreeNode(6);
    expect(preorderTraversal(node)).toEqual([5,4,6]);
    node.left.left = new TreeNode(3);
    expect(preorderTraversal(node)).toEqual([5,4,3,6]);


});