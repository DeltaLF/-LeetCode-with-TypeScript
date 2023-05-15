import { swapNodes, ListNode } from "../1721_Swapping_Nodes_in_a_Linked_List";

function listToArr(head: ListNode | null): number[] {
  const res: number[] = [];
  while (head) {
    res.push(head.val);
    head = head.next;
  }
  return res;
}

it("swaps nodes", () => {
  //one
  const head = new ListNode(1);
  expect(swapNodes(head, 1)).toEqual(head);
  //two
  head.next = new ListNode(2);
  console.log(head);
  swapNodes(head, 2);
  console.log(head);
  expect(listToArr(head)).toEqual([2, 1]);
  swapNodes(head, 1);
  expect(listToArr(head)).toEqual([1, 2]);
});
