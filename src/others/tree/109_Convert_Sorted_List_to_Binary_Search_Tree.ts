//  Definition for singly-linked list.
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

//  Definition for a binary tree node.
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

function sortedListToBST(head: ListNode | null): TreeNode | null {
  /*
    Input: head = [-10,-3,0,5,9]
Output: [0,-3,9,-10,null,5]
Explanation: One possible answer is [0,-3,9,-10,null,5], which represents the shown height balanced BST.

                           0
                    -10 -3   

    1 2 3 4 5 6 7 8 9 10
                  6
               3     9
              2  4  7  10
             1    5  8

    1. find middle from linked list
    2. make middle as root
    3. divide into two sub problem
     */
  function findPrevMiddle(head: ListNode): ListNode {
    /* 1 - 2 - 3 - 4 -5
     slow
         fast
     find the one previous to middle from linked list
    */
    let slow = head;
    let fast = head.next;
    while (!!fast?.next?.next) {
      slow = slow.next!;
      fast = fast.next?.next;
    }
    return slow;
  }
  if (!head) return null;
  if (!head.next) return new TreeNode(head.val); // single linked list
  const prevMiddle = findPrevMiddle(head); // n > 1
  const middle = prevMiddle.next!; // there must be at least 2 nodes so middle must exist
  prevMiddle.next = null;
  const rightHead = middle.next;
  const root = new TreeNode(middle.val);
  root.left = sortedListToBST(head);
  root.right = sortedListToBST(rightHead);
  console.log(root);
  return root;
}

export { sortedListToBST };
