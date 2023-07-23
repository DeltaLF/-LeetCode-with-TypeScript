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

function allPossibleFBT(n: number): Array<TreeNode | null> {
  /*
           0
        l    r

        l + r = (n-1) nodes
        here are all possible combinations:
        l=0 r=n-1
        l=1 r=n-2
        ...
        l=n-1 r=0

        for exmaple l=0 r=n-1
        we can use allPossibleFBT(0) to get left child nodes
        allPOssibleFBT(n-1) to get left child nodes
    
    */
  const memo = new Map<number, Array<TreeNode>>();
  function dft(n: number): Array<TreeNode | null> {
    if (n % 2 === 0) return [];
    if (n === 1) return [new TreeNode(0)];
    if (memo.has(n)) return memo.get(n)!;
    const res: Array<TreeNode> = [];

    for (let l = 0; l < n; l++) {
      // 0~n-1
      const r = n - l - 1;
      const leftNodes = dft(l);
      const rightNodes = dft(r);
      for (const leftNode of leftNodes) {
        for (const rightNode of rightNodes) {
          res.push(new TreeNode(0, leftNode, rightNode));
        }
      }
    }
    memo.set(n, res);
    return res;
  }
  return dft(n);
}

export { allPossibleFBT };
