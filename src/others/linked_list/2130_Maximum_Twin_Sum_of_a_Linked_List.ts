// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function pairSum(head: ListNode | null): number {
  /*
    Input: head = [5,4,2,1]
    
     */
  const arr: number[] = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  let max = 0;
  let l = 0;
  let r = arr.length - 1;
  while (l < r) {
    max = Math.max(max, arr[l] + arr[r]);
    l++;
    r--;
  }
  return max;
}

export {pairSum, ListNode}