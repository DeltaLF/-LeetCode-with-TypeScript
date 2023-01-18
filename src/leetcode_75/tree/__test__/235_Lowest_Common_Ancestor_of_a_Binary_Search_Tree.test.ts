import { lowestCommonAncestor } from "../235_Lowest_Common_Ancestor_of_a_Binary_Search_Tree";
import { TreeNode } from "../tree.type";

it("find the loweset common ancestor of two given nodes",()=>{
    const root = new TreeNode(6);
    const l2 = root.left = new TreeNode(2);
    expect(lowestCommonAncestor(root,root,l2)).toEqual(root);
    const r8 = root.right = new TreeNode(8);
    expect(lowestCommonAncestor(root,r8,l2)).toEqual(root);
    const l0 = root.left.left = new TreeNode(0);
    expect(lowestCommonAncestor(root,r8,l0)).toEqual(root);
    expect(lowestCommonAncestor(root,l2,l0)).toEqual(l2);


});


it("find the loweset common ancestor of two given nodes in a inbalance tree",()=>{
    const root = new TreeNode(5);
    const l4 = root.left = new TreeNode(4);
    const l3 = root.left.left = new TreeNode(3);
    const l2 = root.left.left.left = new TreeNode(2);
    const l1 = root.left.left.left.left = new TreeNode(1);
    expect(lowestCommonAncestor(root,root,l1)).toEqual(root);
    expect(lowestCommonAncestor(root,l2,l1)).toEqual(l2);
    expect(lowestCommonAncestor(root,l3,l1)).toEqual(l3);
    expect(lowestCommonAncestor(root,l4,l2)).toEqual(l4);
});