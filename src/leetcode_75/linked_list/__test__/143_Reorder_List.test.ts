import { reorderList } from "../143_Reorder_List";
import { ListNode } from "../linked_list.type";

it('tests reorderList function with input size 1',()=>{
    const node = new ListNode(0);
    reorderList(node);
    const nodeDup = new ListNode(0);
    expect(node).toEqual(nodeDup)
});

it('tests reorderList function with input size 2',()=>{
    const node = new ListNode(0);
    node.next = new ListNode(1);
    reorderList(node);
    const nodeDup = new ListNode(0);
    nodeDup.next = new ListNode(1);
    expect(node).toEqual(nodeDup)
});

it('tests reorderList function with input size 3',()=>{
    const node = new ListNode(0);
    node.next = new ListNode(1);
    node.next.next = new ListNode(2);
    reorderList(node);
    const nodeDup = new ListNode(0);
    nodeDup.next = new ListNode(2);
    nodeDup.next.next = new ListNode(1);
    expect(node).toEqual(nodeDup)
});

it('tests reorderList function with input size 4',()=>{
    const node = new ListNode(0);
    node.next = new ListNode(1);
    node.next.next = new ListNode(2);
    node.next.next.next = new ListNode(3);
    reorderList(node);
    const nodeDup = new ListNode(0);
    nodeDup.next = new ListNode(3);
    nodeDup.next.next = new ListNode(1);
    nodeDup.next.next.next = new ListNode(2);
    expect(node).toEqual(nodeDup)
});

it('tests reorderList function with input size 5',()=>{
    const node = new ListNode(0);
    node.next = new ListNode(1);
    node.next.next = new ListNode(2);
    node.next.next.next = new ListNode(3);
    node.next.next.next.next = new ListNode(4);
    reorderList(node);
    const nodeDup = new ListNode(0);
    nodeDup.next = new ListNode(4);
    nodeDup.next.next = new ListNode(1);
    nodeDup.next.next.next = new ListNode(3);
    nodeDup.next.next.next.next = new ListNode(2);
    expect(node).toEqual(nodeDup)
});

