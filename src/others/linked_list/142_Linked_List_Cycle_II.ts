//Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function detectCycle(head: ListNode | null): ListNode | null {
  if (!head) return null;
  let slow = head;
  let fast = head;
  while (!!fast?.next?.next && !!slow?.next) {
    slow = slow?.next;
    fast = fast.next.next;
    if (slow === fast) break;
  }
  if (!fast?.next?.next) return null;
  slow = head;
  while (slow !== fast) {
    slow = slow.next!;
    fast = fast.next!;
  }
  return slow;
}

function detectCycleUptimzed(head: ListNode | null): ListNode | null {
  /* 
 1 2 3 4 5 6 ... n
   p
   |_____________|
       n - p
|__|______|______|
 p     y    n-p-y

 slow and fast meet at (p+y)

 slow: p + y + s( n-p )  
 fast: p + y + f( n-p )

 2(p + y + s(n-p)) = p + y + f(n-p)

 p = -y + (f-s)(n-p) = -y + x(n-p)  // x is intger





*/
  if (!head) return null;
  let slow = head;
  let fast = head;
  let count = 0;
  while (!!fast?.next?.next && !!slow?.next) {
    count++;
    slow = slow?.next;
    fast = fast.next.next;
    if (slow === head) count = 0; // reset count if slow and head meet after itearing over all link list
    if (slow === fast) break;
  }
  if (!fast?.next?.next) return null;

  // try to find the cycle:
  while (true) {
    slow = slow.next!;
    // count 0 ~ slow.next length
    let node = head;
    let nodePos = 0;
    while (node !== slow) {
      nodePos++;
      node = node.next!;
    }

    if (nodePos <= count) return node;
  }
}

function detectCycleSpaceOn(head: ListNode | null): ListNode | null {
  /*
      Input: head = [3,2,0,-4], pos = 1
  
      3 -> 2 -> 0 -> -4
  
      solution 1: 
      use map to store every node position 
      time O(n)
      space O(n)
       */
  const map = new Map<ListNode, boolean>();
  while (head?.next) {
    if (map.has(head)) {
      break;
    } else {
      map.set(head, true);
    }
    head = head.next;
  }
  return head?.next ? head : null;
}

export { detectCycle, ListNode };
