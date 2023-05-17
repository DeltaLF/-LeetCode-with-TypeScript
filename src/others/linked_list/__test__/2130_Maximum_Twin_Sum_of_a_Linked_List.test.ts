import { pairSum, ListNode } from "../2130_Maximum_Twin_Sum_of_a_Linked_List";

it("finds pairSum", () => {
  const node = new ListNode(0);
  node.next = new ListNode(1);
  expect(pairSum(node)).toBe(1);
  node.next = new ListNode(2);
  node.next = new ListNode(3);
  expect(pairSum(node)).toBe(3);
});
