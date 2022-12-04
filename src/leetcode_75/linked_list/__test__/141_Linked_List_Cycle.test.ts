import { hasCycle } from "../141_Linked_List_Cycle";
import { ListNode } from "../linked_list.type";

it('tests link-list with cycle',()=>{
    const head = new ListNode(1);
    const node2 = new ListNode(2)
    const node3 = new ListNode(3)
    const node2Dup = new ListNode(2)
    const node4 = new ListNode(4)

    head.next = head;
    // one
    expect(hasCycle(head)).toBe(true);
    // two  
    head.next = node2;
    node2.next = head; 
    expect(hasCycle(head)).toBe(true);
    node2.next = node2
    expect(hasCycle(head)).toBe(true);
    node2.next = node3;
    node3.next =head;
    expect(hasCycle(head)).toBe(true);
    node3.next = node2;
    expect(hasCycle(head)).toBe(true);
    node3.next = node2Dup;
    node2Dup.next = node2;
    expect(hasCycle(head)).toBe(true);
    node2Dup.next = node4;
    node4.next = node3;
    expect(hasCycle(head)).toBe(true);

})

it('tests link-list without cycle',()=>{
    const head = new ListNode(1);
    const node2 = new ListNode(2)
    const node3 = new ListNode(3)
    const node2Dup = new ListNode(2)
    const node4 = new ListNode(4)
    expect(hasCycle(head)).toBe(false);
    head.next = node2;
    expect(hasCycle(head)).toBe(false);
    node2.next = node3;
    expect(hasCycle(head)).toBe(false);
    node3.next = node2Dup;
    expect(hasCycle(head)).toBe(false);
    node2Dup.next = node4;
    expect(hasCycle(head)).toBe(false);


})