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

function findDuplicateSubtrees(root: TreeNode | null): Array<TreeNode | null> {
  const hashMap: { [key: string]: number } = {};
  const res: TreeNode[] = [];
  function dft(node: TreeNode | null): string {
    // pos order traversal
    // but treeArray store as in order
    if (!node) return "#";
    let leftSubTree = dft(node.left);
    let rightSubTree = dft(node.right);
    leftSubTree = leftSubTree === "#" ? "#" : "l" + leftSubTree;
    rightSubTree = rightSubTree === "#" ? "#" : "r" + rightSubTree;
    const strCurr = `${node.val}${leftSubTree}${rightSubTree}`;
    if (hashMap[strCurr] === 1) {
      res.push(node);
    }
    if (hashMap[strCurr] === undefined) {
      hashMap[strCurr] = 1;
    } else {
      hashMap[strCurr] += 1;
    }
    return strCurr;
  }

  dft(root);
  return res;
}

function findDuplicateSubtreesNotOptimzed(
  root: TreeNode | null
): Array<TreeNode | null> {
  /*
      Input: root = [1,2,3,4,null,2,4,null,null,4]
      Output: [[2,4],[4]]
      
      note:
      nodes count < [1,5000]
      -200 <= Node.val <= 200
      make a size 401 array storing array of node with same val
       val=-200        val=-199 val=-198
      [[ nodeA, nodeC ], [],   [nodeK]....]
      in every sub array check wether any of them contains duplicate subtree
      in worsest case all node contains same val
      it takes O(n^2) 
      n^2 for iterate any two of node
      n for conduct the comparison
      but it should not TLE since nodes count < 5000 
      nope 
      new approach:
      stringify subTree
      [ '1,2,3', '2', '3'  ]
      put the string into map 
      return every distinct answer
      map:{
          [key:string]: { count:number, node:TreeNode }
      }
      stringify array
      [{node:Node, subTree:string}]
      
        1: 1 2 4 5 3 6 7
      2: 2 4 5  3: 3 6 7
         1
        / \
      2    3
     / \  / \
     4 5  6 7 
       */
  if (!TreeNode) return [];

  interface StringifyTreeObj {
    node: TreeNode;
    subArray: string;
  }
  const stringifyTreeArray: StringifyTreeObj[] = [];

  function dft(node: TreeNode | null): string {
    // pos order traversal
    // but treeArray store as in order
    if (!node) return "#";
    let leftSubTree = dft(node.left);
    let rightSubTree = dft(node.right);
    leftSubTree = leftSubTree === "#" ? "#" : "l" + leftSubTree;
    rightSubTree = rightSubTree === "#" ? "#" : "r" + rightSubTree;
    stringifyTreeArray.push({
      node: node,
      subArray: `${node.val}${leftSubTree}${rightSubTree}`,
    });
    return stringifyTreeArray[stringifyTreeArray.length - 1].subArray;
  }
  dft(root);
  type CountNode = {
    count: number;
    node: TreeNode;
  };
  const treeMap: { [key: string]: CountNode } = {};
  /*
        return every distinct answer
      map:{
          [key:string]: { count:number, node:TreeNode }
      }
    */
  for (let strTreeObj of stringifyTreeArray) {
    if (treeMap[strTreeObj.subArray] === undefined) {
      treeMap[strTreeObj.subArray] = { count: 1, node: strTreeObj.node };
    } else {
      treeMap[strTreeObj.subArray].count += 1;
    }
  }
  const ans: TreeNode[] = [];
  for (let key in treeMap) {
    if (treeMap[key].count > 1) {
      ans.push(treeMap[key].node);
    }
  }
  //   console.log(stringifyTreeArray)
  return ans;
}
export { findDuplicateSubtrees, TreeNode };
