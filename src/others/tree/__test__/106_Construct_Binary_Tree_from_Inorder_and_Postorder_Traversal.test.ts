import {
  buildTree,
  TreeNode,
} from "../106_Construct_Binary_Tree_from_Inorder_and_Postorder_Traversal";

describe("recover binary tree based on inorder and posorder array", () => {
  it("test build in one", () => {
    const root = new TreeNode(0);
    expect(buildTree([0], [0])).toEqual(root);
  });

  it("test build in inbalance case ", () => {
    const root = new TreeNode(0, new TreeNode(1));
    expect(buildTree([1, 0], [1, 0])).toEqual(root);
    /*
         0
       1
     2
    */
    root.left!.left = new TreeNode(2);
    expect(buildTree([2, 1, 0], [2, 1, 0])).toEqual(root);
    /*
         0
       1   10
     2
    */
    root.right = new TreeNode(10);
    expect(buildTree([2, 1, 0, 10], [2, 1, 10, 0])).toEqual(root);
  });

  it("tests build in normal case", () => {
    const root = new TreeNode(3);
    root.left = new TreeNode(9);
    root.right = new TreeNode(20, new TreeNode(15), new TreeNode(7));
    expect(buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3])).toEqual(root);
  });
});
