//Definition for singly-linked list.
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const stack1: number[] = [];
  const stack2: number[] = [];

  function traversal(node: ListNode | null, stack: number[]) {
    while (node) {
      stack.push(node.val);
      node = node.next;
    }
  }
  traversal(l1, stack1);
  traversal(l2, stack2);
  const ansStack: number[] = [];
  let isCarry = 0;
  while (stack1.length > 0 || stack2.length > 0) {
    const s1 = stack1.pop() || 0;
    const s2 = stack2.pop() || 0;
    let sum = 0;
    if (s1 + s2 + isCarry > 9) {
      sum = s1 + s2 + isCarry - 10;
      isCarry = 1;
    } else {
      sum = s1 + s2 + isCarry;
      isCarry = 0;
    }
    ansStack.push(sum);
  }
  if (isCarry === 1) ansStack.push(1);
  const head: ListNode = new ListNode(); // head
  let ans = head;
  while (ansStack.length > 0) {
    ans.next = new ListNode(ansStack.pop());
    ans = ans.next;
  }
  return head.next;
}

export { addTwoNumbers };
