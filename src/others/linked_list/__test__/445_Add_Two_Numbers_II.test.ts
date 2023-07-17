import { addTwoNumbers, ListNode } from "../445_Add_Two_Numbers_II";
it("finds addTwoNumbers", () => {
  const ans = new ListNode(1);
  ans.next = new ListNode(0);
  expect(addTwoNumbers(new ListNode(5), new ListNode(5))).toEqual(ans);
});
