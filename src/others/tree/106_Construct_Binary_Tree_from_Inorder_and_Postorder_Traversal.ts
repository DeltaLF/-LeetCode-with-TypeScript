//Definition for a binary tree node.
export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  /*
  Input: inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
  Output: [3,9,20,null,null,15,7]
         3
      9    20
         15   7
      
    posOrder: the root is at last
    inOrder: the root is at middle (left is left tree right is right tree)
         1
      2    3 
    4  5  6  7
             l           r
    inoder  [4,2,5,1,6,3,7]
                  root
                     l   r
    postOder[4,5,2,6,7,3,1]
                         root    
                   l   r
    right subTree
    for inorder l:4 r:6
    for posorder l:3 r:5
    maybe we should not use l and r
    instead use lin, lpos and len
    optimize:
    1. use HashMap to avoid indexOf in every loop
    2. instead of slice, simply use left and right pointer

   */
  if (inorder.length === 0) return null;
  const inOderhashMap: { [key: string]: number } = {};
  for (let ind in inorder) {
    inOderhashMap[inorder[ind].toString()] = parseInt(ind);
  }

  function helper(lin: number, lpos: number, len: number): TreeNode | null {
    //  the l and r should be respected to inorder or postorder?
    if (len === 0) return null;
    if (len === 1) return new TreeNode(postorder[lpos]);
    const rootNum = postorder[lpos + len - 1];
    const root = new TreeNode(rootNum);
    const rootNumAtInorderIndex = inOderhashMap[rootNum];
    const newLeftLen = rootNumAtInorderIndex - lin;
    const newRightLen = len - newLeftLen - 1;
    root.left = helper(lin, lpos, newLeftLen);
    root.right = helper(lin + newLeftLen + 1, lpos + newLeftLen, newRightLen);
    return root;
  }
  return helper(0, 0, inorder.length);
}

function buildTreeNotOptimizedII(
  inorder: number[],
  postorder: number[]
): TreeNode | null {
  /*
  Input: inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
  Output: [3,9,20,null,null,15,7]
         3
      9    20
         15   7
      
    posOrder: the root is at last
    inOrder: the root is at middle (left is left tree right is right tree)
         1
      2    3 
    4  5  6  7
    inoder  [4,2,5,1,6,3,7]
                  root
    postOder[4,5,2,6,7,3,1]
                         root    
   */
  if (inorder.length === 0) return null;
  const rootNum = postorder[postorder.length - 1];
  const root = new TreeNode(rootNum);
  const indexOfRootNum = inorder.indexOf(rootNum);
  root.left = buildTree(
    inorder.splice(0, indexOfRootNum),
    postorder.splice(0, indexOfRootNum)
  );
  postorder.pop(); // remove root number
  root.right = buildTree(inorder.splice(1, inorder.length - 1), postorder);
  return root;
}

/*
              1
            /   \
          2      3
        /  \    /  \
       4    5  6    7
       in: [4,2,5,1,6,3,7]
                  R
            l   r 3 l   r
               
       pos:[4,5,2,6,7,3,1] // root is the last one
                        R
             inorderRootInd:3
           l    r l   r
range between l and r represents a subtree
           the l and r is for inorder array or posoder array???
        for postorder: because posorder[r] = rootVal no
        for inorder: becuase we need R to seperate left, right tree

*/

function buildTreeOld(inorder: number[], postorder: number[]): TreeNode | null {
  const n = inorder.length;
  const inOrderMap: { [key: number]: number } = {};
  for (let i = 0; i < n; i++) {
    inOrderMap[inorder[i]] = i; // take O(1) to looking for index
  }
  let posInd = n - 1;
  function helper(l = 0, r = n - 1): TreeNode | null {
    if (r - l < 0) return null;
    const root = new TreeNode(postorder[posInd]);
    const inorderRootInd = inOrderMap[postorder[posInd]];
    posInd--;
    root.right = helper(inorderRootInd + 1, r);
    root.left = helper(l, inorderRootInd - 1);
    return root;
  }

  return helper();
}

function buildTreeNotOptimized(
  inorder: number[],
  postorder: number[]
): TreeNode | null {
  /*
    Input: inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
      in order: left node right
    post order: left right node      
              
    Output: [3,9,20,null,null,15,7]
              3 
            /   \
           9    20
               /  \
              15   7




              1
            /   \
          2      3
        /  \    /  \
       4    5  6    7
       in: [4,2,5,1,6,3,7]
       pos:[4,5,2,6,7,3,1] // root is the last one
       since we know 1 is root:
       for inoder:
       before root-> left  [4,2,5]
       after  root-> right [6,3,7]
       but how about pos order:?
       for the first node on the right tree => it's also the first node on right hand
       pos( ind(firstNodeOnRight -1 ) )

       complexity:
       for balance tree:
       it takes  n times to build
       in each build: n + n/2 + n/4 +... O(n)
       total=> O(n^2)
    
    */
  if (inorder.length === 0) return null;
  const n = inorder.length;
  const rootVal = postorder[n - 1];
  const root = new TreeNode(rootVal);
  const inoderRootIndex = inorder.indexOf(rootVal); // every number is unique
  const inorderLeftTree = inorder.slice(0, inoderRootIndex);
  const inorderRightTree = inorder.slice(inoderRootIndex + 1);
  const posorderLeftTree = postorder.slice(0, inoderRootIndex);
  const posorderRightTree = postorder.slice(inoderRootIndex);
  root.left = buildTreeNotOptimized(inorderLeftTree, posorderLeftTree);
  root.right = buildTreeNotOptimized(inorderRightTree, posorderRightTree);
  return root;
}
export { buildTree };
