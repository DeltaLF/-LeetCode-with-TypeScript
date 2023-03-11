import {
  sortedListToBST,
  ListNode,
  TreeNode,
} from "../109_Convert_Sorted_List_to_Binary_Search_Tree";

it("converts sortedList to balance binary search tree", () => {
  expect(sortedListToBST(null)).toBe(null);
  // one
  const linkedList = new ListNode(0);
  expect(sortedListToBST(linkedList)).toEqual(new TreeNode(linkedList.val));
  // two
  linkedList.next = new ListNode(1);
  const answerTwo = new TreeNode(
    linkedList.next.val,
    new TreeNode(linkedList.val)
  );
  expect(sortedListToBST(linkedList)).toEqual(answerTwo);
  // three
  linkedList.next = new ListNode(1);
  linkedList.next.next = new ListNode(2);
  const answerThree = new TreeNode(linkedList.next.val);
  answerThree.left = new TreeNode(linkedList.val);
  answerThree.right = new TreeNode(linkedList.next.next.val);
  expect(sortedListToBST(linkedList)).toEqual(answerThree);
});
