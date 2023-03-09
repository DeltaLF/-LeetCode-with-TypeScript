import { detectCycle, ListNode } from "../142_Linked_List_Cycle_II";

it("detects cycle", () => {
  // one
  const oneNode = new ListNode(0);
  expect(detectCycle(oneNode)).toBe(null);
  oneNode.next = oneNode;
  expect(detectCycle(oneNode)).toBe(oneNode);
  // two
  oneNode.next = new ListNode(0);
  expect(detectCycle(oneNode)).toBe(null);
  oneNode.next.next = oneNode;
  expect(detectCycle(oneNode)).toBe(oneNode);
  oneNode.next.next = oneNode.next;
  expect(detectCycle(oneNode)).toBe(oneNode.next);
});
