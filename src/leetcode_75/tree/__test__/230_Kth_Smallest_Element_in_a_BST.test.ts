import { kthSmallest } from "../230_Kth_Smallest_Element_in_a_BST";
import { TreeNode } from "../tree.type";

it('finds out the kth smallest nunmber in binary tree',()=>{
    // one 
    const root = new TreeNode(5);
    expect(kthSmallest(root,1)).toBe(5);
    // two
    root.left = new TreeNode(4);
    expect(kthSmallest(root,1)).toBe(4);
    expect(kthSmallest(root,2)).toBe(5);
    // three
    root.right = new TreeNode(6);
    expect(kthSmallest(root,1)).toBe(4);
    expect(kthSmallest(root,2)).toBe(5);
    expect(kthSmallest(root,3)).toBe(6);
})

it('finds out the kth smallest nunmber in an inbalance binary tree',()=>{
    const root = new TreeNode(5);
    root.left = new TreeNode(4);
    root.left.left = new TreeNode(3);
    expect(kthSmallest(root,1)).toBe(3);
    expect(kthSmallest(root,2)).toBe(4);
    expect(kthSmallest(root,3)).toBe(5);
    root.left.left.left = new TreeNode(2);
    expect(kthSmallest(root,1)).toBe(2);
    expect(kthSmallest(root,2)).toBe(3);
    expect(kthSmallest(root,3)).toBe(4);
    expect(kthSmallest(root,4)).toBe(5);
    root.left.left.left.left = new TreeNode(1);
    expect(kthSmallest(root,1)).toBe(1);
    expect(kthSmallest(root,2)).toBe(2);
    expect(kthSmallest(root,3)).toBe(3);
    expect(kthSmallest(root,4)).toBe(4);
    expect(kthSmallest(root,5)).toBe(5);

})