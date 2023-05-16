// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function swapPairs(head: ListNode | null): ListNode | null {
  /*
        Input: head = [1,2,3,4]
        Output: [2,1,4,3]
                
        prev -> node -> node2 -> next
        prev -> node2 -> node -> next
        */
  if (!head || !head.next) return head;
  let node = head;
  const newHead = head.next;
  let prev: ListNode;
  while (node && node.next) {
    // swap
    const next = node.next.next;
    const node2 = node.next;
    if (node !== head) prev!.next = node2;
    node2.next = node;
    node.next = next;
    prev = node;
    if (!next) break;
    node = next;
  }

  return newHead;
}
export { swapPairs, ListNode };
