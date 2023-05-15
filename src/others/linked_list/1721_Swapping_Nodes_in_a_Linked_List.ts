// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function swapNodes(head: ListNode | null, k: number): ListNode | null {
  /*
      Input: head = [1,2,3,4,5], k = 2
  Output: [1,4,3,2,5]
  Input: head = [7,9,6,6,7,8,3,0,9,5], k = 5
  Output: [7,9,6,6,8,7,3,0,9,5]
       */
  if (!head) return null;
  function getLinklistLength(head: ListNode | null) {
    let length = 0;
    while (head) {
      length++;
      head = head.next;
    }
    return length;
  }
  let backK = getLinklistLength(head) - k;
  k -= 1;
  let i = 0;
  let node = head;
  let nodeK: ListNode;
  let nodeBK: ListNode;
  if (k === backK) return head;
  while (node) {
    if (i === k) {
      nodeK = node;
    }
    if (i === backK) {
      nodeBK = node;
    }
    i++;
    node = node.next!;
  }
  //swap

  const tempVal = nodeK!.val;
  nodeK!.val = nodeBK!.val;
  nodeBK!.val = tempVal;

  return head;
}

export { swapNodes, ListNode };
