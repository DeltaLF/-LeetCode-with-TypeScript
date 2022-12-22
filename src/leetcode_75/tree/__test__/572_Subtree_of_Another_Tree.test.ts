import { isSubtree } from "../572_Subtree_of_Another_Tree";
import { TreeNode } from "../tree.type";
it('tests isSubTree function',()=>{
    const treeI = new TreeNode(0);
    const treeII = new TreeNode(0);
    const treeIII = new TreeNode(0);
    expect(isSubtree(treeI,treeI)).toBe(true);
    expect(isSubtree(treeIII,treeII)).toBe(true);

});

it('tests isSubTree function',()=>{
    const treeI = new TreeNode(0);
    const treeII = new TreeNode(0);
    treeI.left = new TreeNode(1);
    console.log("I",treeI,"II",treeII)
    expect(isSubtree(treeI,treeII)).toBe(false);

});