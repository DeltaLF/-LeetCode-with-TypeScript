import { Solution, ListNode } from "../382_Linked_List_Random_Node";

it("get random node", () => {
  const node = new ListNode(0);
  node.next = new ListNode(1);
  node.next.next = new ListNode(2);
  node.next.next.next = new ListNode(3);

  const sol = new Solution(node);
  function isInRange(num: number): boolean {
    return num <= 3 && num >= 0;
  }
  expect(isInRange(sol.getRandom())).toBe(true);
  expect(isInRange(sol.getRandom())).toBe(true);
  expect(isInRange(sol.getRandom())).toBe(true);
  expect(isInRange(sol.getRandom())).toBe(true);
  expect(isInRange(sol.getRandom())).toBe(true);
});
