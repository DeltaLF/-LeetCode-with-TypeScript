//Definition for a binary tree node.
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

function sumNumbers(root: TreeNode | null): number {
  if (!root) return 0;
  let sum = 0;
  function dft(node: TreeNode, str = "") {
    str = str.concat(node.val.toString());
    if (node.left) dft(node.left, str);
    if (node.right) dft(node.right, str);
    if (!node.left && !node.right) sum += parseInt(str);
  }
  dft(root);
  return sum;
}

function sumNumbersSpaceOn(root: TreeNode | null): number {
  /*
    Input: root = [4,9,0,5,1]
    Output: 1026
    Explanation:
    The root-to-leaf path 4->9->5 represents the number 495.
    The root-to-leaf path 4->9->1 represents the number 491.
    The root-to-leaf path 4->0 represents the number 40.
                4
               /  \
             9      0
            / \
           5   1
           DFT=>
           4-9-5
             - 1
             0

     */
  if (!root) return 0;
  const leafPath: number[] = [];
  function dft(node: TreeNode, str = "") {
    str = str.concat(node.val.toString());
    if (node.left) dft(node.left, str);
    if (node.right) dft(node.right, str);
    if (!node.left && !node.right) leafPath.push(parseInt(str));
  }
  dft(root);
  return leafPath.reduce((prev, curr) => prev + curr, 0);
}

export { sumNumbers, TreeNode };
