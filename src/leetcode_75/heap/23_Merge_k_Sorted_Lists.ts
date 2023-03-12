/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
import { ListNode } from "./heap.type";

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  /*
    merge sort  
      */
  if (lists.length === 0) return null;
  if (lists.length === 1) return lists[0];
  while (lists.length > 1) {
    const arr: Array<ListNode> = [];
    for (let i = 0; i < lists.length; i = i + 2) {
      if (!!lists[i] || !!lists[i + 1]) {
        arr.push(merge2(lists[i], lists[i + 1])!);
      }
    }
    lists = arr;
  }

  return lists[0] ? lists[0] : null;

  function merge2(
    link1: ListNode | null,
    link2: ListNode | null
  ): ListNode | null {
    if (!link1 && !link2) return null;
    if (!link1) return link2;
    if (!link2) return link1;
    let head: ListNode | null = null;
    if (link1.val > link2.val) {
      head = link2;
      link2 = link2.next;
    } else {
      head = link1;
      link1 = link1.next;
    }
    let node = head;
    while (!!link1 && !!link2) {
      if (link1.val > link2.val) {
        node.next = link2;
        link2 = link2.next;
      } else {
        node.next = link1;
        link1 = link1.next;
      }
      node = node.next;
    }
    if (!!link1) node.next = link1;
    if (!!link2) node.next = link2;
    return head;
  }
}

function mergeKListsOnebyOne(lists: Array<ListNode | null>): ListNode | null {
  /*
Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6

1. merge 1,2 then 2,3 then 3,4...
2. merge them all together

    */
  if (lists.length === 0) return null;
  if (lists.length === 1) return lists[0];
  // try sol1:

  function merge2(
    link1: ListNode | null,
    link2: ListNode | null
  ): ListNode | null {
    if (!link1 && !link2) return null;
    if (!link1) return link2;
    if (!link2) return link1;
    let head: ListNode | null = null;
    if (link1.val > link2.val) {
      head = link2;
      link2 = link2.next;
    } else {
      head = link1;
      link1 = link1.next;
    }
    let node = head;
    while (!!link1 && !!link2) {
      if (link1.val > link2.val) {
        node.next = link2;
        link2 = link2.next;
      } else {
        node.next = link1;
        link1 = link1.next;
      }
      node = node.next;
    }
    if (!!link1) node.next = link1;
    if (!!link2) node.next = link2;
    return head;
  }
  let head = merge2(lists[0], lists[1]);
  for (let i = 2; i < lists.length; i++) {
    head = merge2(head, lists[i]);
  }
  return head;
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKListsOld = function (lists: ListNode[] | null[]): ListNode | null {
  if (lists.length === 0) return null;

  const result = new ListNode(-Infinity);
  let node: ListNode | null = result;
  // iterate through arrays
  while (true) {
    let minInd = 0;
    for (let i = 0; i < lists.length; i++) {
      if (!lists[minInd]) {
        minInd += 1;
        continue;
      }
      if (!lists[i]) continue; // the listNode is alreadly iterated to the end
      if (lists[i]!.val < lists[minInd]!.val) {
        minInd = i;
      }
    }
    if (minInd >= lists.length) break;
    node.next = lists[minInd]!;
    node = node.next;
    lists[minInd] = lists[minInd]!.next;
  }
  return result.next;
};

export { mergeKLists };
