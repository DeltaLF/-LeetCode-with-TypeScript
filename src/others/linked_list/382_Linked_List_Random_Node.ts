//Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

class Solution {
  private len: number = 0;
  private head: ListNode | null = null;
  constructor(head: ListNode | null) {
    this.head = head;
    while (!!head) {
      this.len++;
      head = head.next;
    }
  }

  getRandom(): number {
    const index = Math.floor(Math.random() * this.len);
    let node = this.head;
    for (let i = 0; i < index; i++) {
      node = node!.next;
    }
    return node!.val;
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */

export { Solution, ListNode };
