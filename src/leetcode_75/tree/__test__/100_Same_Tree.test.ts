import { isSameTree } from "../100_Same_Tree";
import {TreeNode} from "../tree.type";

it('tests isSameTree function', () => {


    // init
    const p = new TreeNode(0);
    const q = new TreeNode(0);
    //  empty
    expect(isSameTree(p,null)).toBe(false);
    expect(isSameTree(null,q)).toBe(false);
    expect(isSameTree(null,null)).toBe(true);
    // one
    expect(isSameTree(p,q)).toBe(true);
    p.left = new TreeNode(1);
    q.right = new TreeNode(1);
    expect(isSameTree(p,q)).toBe(false);
    p.right = new TreeNode(1);
    q.left = new TreeNode(1);
    // inbalance
    expect(isSameTree(p,q)).toBe(true);
    p.right.right = new TreeNode(2);
    p.right.right.right = new TreeNode(3);
    p.right.right.right.right = new TreeNode(4);
    p.right.right.right.right.right = new TreeNode(5);
    p.right.right.right.right.right.right = new TreeNode(6);
    expect(isSameTree(p,q)).toBe(false);
    expect(isSameTree(p,p)).toBe(true);
})