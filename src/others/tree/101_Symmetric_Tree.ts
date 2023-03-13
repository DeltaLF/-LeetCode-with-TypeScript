// Definition for a binary tree node.
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function isSymmetric(root: TreeNode | null): boolean {
  /*
    Input: root = [1,2,2,3,4,4,3]
    Output: true
           1
        2     2
      3  4  4  3  

    Input: root = [1,2,2,null,3,null,3]
          1
        2   2
         3   3 

    Output: false
    
    1. BFT
    2. recursive? 
     */
  if (!root) return true;
  function check(left: TreeNode | null, right: TreeNode | null): boolean {
    if (!left && !right) return true;
    if (left === null || right === null) return false;
    if (left.val !== right.val) return false;
    return check(left.left, right.right) && check(left.right, right.left);
  }
  return check(root.left, root.right);
}

export { isSymmetric, TreeNode };
