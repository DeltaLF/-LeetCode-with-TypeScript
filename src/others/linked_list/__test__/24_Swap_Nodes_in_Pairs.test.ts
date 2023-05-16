import { swapPairs, ListNode } from "../24_Swap_Nodes_in_Pairs";

it("swaps pairs", () => {
  function linkToArr(head: ListNode | null) {
    const res: number[] = [];
    while (head) {
      res.push(head.val);
      head = head.next;
    }
    return res;
  }
  const head = new ListNode(0);
  expect(swapPairs(head)).toEqual(head);
  head.next = new ListNode(1);
  const head2 = swapPairs(head);
  expect(linkToArr(head2)).toEqual([1, 0]);
  head2!.next!.next = new ListNode(2);
  const head3 = swapPairs(head2);
  expect(linkToArr(head3)).toEqual([0, 1, 2]);
});
