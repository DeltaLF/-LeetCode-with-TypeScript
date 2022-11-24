import { maxDepth } from "../104_Maximum_Depth_of_Binary_Tree";
import {TreeNode} from "../tree.type";

it('tests maxDepth function', () => {
    // init
    const root = new TreeNode(3);
    console.log("root",root)
    // empty
    expect(maxDepth(null)).toEqual(0);
    // one
    expect(maxDepth(root)).toEqual(1);
    root.left = new TreeNode(9);
    expect(maxDepth(root)).toEqual(2);
    root.right = new TreeNode(20);
    expect(maxDepth(root)).toEqual(2);
    root.right.left = new TreeNode(15);
    expect(maxDepth(root)).toEqual(3);
    root.right.left = new TreeNode(7);
    expect(maxDepth(root)).toEqual(3);


    // no branches
    const stick = new TreeNode(0);
    expect(maxDepth(stick)).toEqual(1);
    stick.right = new TreeNode(1);
    expect(maxDepth(stick)).toEqual(2);
    stick.right.right = new TreeNode(2);
    expect(maxDepth(stick)).toEqual(3);
    stick.right.right.right = new TreeNode(3);
    expect(maxDepth(stick)).toEqual(4);
    stick.right.right.right.right = new TreeNode(4);
    expect(maxDepth(stick)).toEqual(5);
    stick.right.right.right.right.right = new TreeNode(5);
    expect(maxDepth(stick)).toEqual(6);
    console.log(stick)

})