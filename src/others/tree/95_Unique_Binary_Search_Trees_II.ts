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

function generateTrees(n: number): Array<TreeNode | null> {
  /*
      Input: n = 3
      Output: [[1,null,2,null,3],[1,null,3,2],[2,1,3],[3,1,null,null,2],[3,2,null,1]]
      Input: n = 1
      Output: [[1]] 
  
      1 2 3
      
      [1 2 3]
      1
      [2 3]
      1 2  
      1 3
      
  
       */
  const nums: number[] = [];
  for (let i = 1; i <= n; i++) {
    nums.push(i);
  }
  function addBinaryTree(head: TreeNode, num: number) {
    while (head) {
      if (num > head.val) {
        if (!head.right) {
          head.right = new TreeNode(num);
          return;
        }
        head = head.right;
      } else {
        if (!head.left) {
          head.left = new TreeNode(num);
          return;
        }
        head = head.left;
      }
    }
  }
  const numsArr: number[][] = [];
  function permute(arr: number[] = [], set = new Set<number>()) {
    if (arr.length === n) {
      numsArr.push(arr.slice());
    }
    for (const num of nums) {
      if (!set.has(num)) {
        set.add(num);
        arr.push(num);
        permute(arr, set);
        set.delete(num);
        arr.pop();
      }
    }
  }
  permute();

  const ans: TreeNode[] = [];
  const memo = new Map<string, boolean>();
  for (const arr of numsArr) {
    const head = new TreeNode(arr[0]);
    for (let i = 1; i < arr.length; i++) {
      addBinaryTree(head, arr[i]);
    }
    const strTree = JSON.stringify(head);
    if (memo.has(strTree)) continue;
    memo.set(strTree, true);
    ans.push(head);
  }
  return ans;
}

export { generateTrees };
