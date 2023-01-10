import { rotateRight } from "../61_Rotate_List";
import { ListNode } from "../linked_list.type";

it('tests rotateRight function',()=>{
    // empty
    expect(rotateRight(null,0)).toEqual(null);
    expect(rotateRight(null,100)).toEqual(null);
    // one
    const node = new ListNode(1)
    expect(rotateRight(node,0)).toEqual(node);
    expect(rotateRight(node,100)).toEqual(node);

    // two
    const nodeII = new ListNode(1);
    nodeII.next = new ListNode(2);
    const nodeIIDup = new ListNode(1);
    nodeIIDup.next = new ListNode(2);
    const nodeIIDupRot = new ListNode(2);
    nodeIIDupRot.next = new ListNode(1);
    expect(rotateRight(nodeII,0)).toEqual(nodeIIDup);
    expect(rotateRight(nodeII,100)).toEqual(nodeIIDup);
    expect(rotateRight(nodeII,101)).toEqual(nodeIIDupRot);

});

it('tests rotatRight function for length 3',()=>{
    const node = new ListNode(1);
    node.next = new ListNode(2);
    node.next.next = new ListNode(3);
    
    const nodeR0 = new ListNode(1);
    nodeR0.next = new ListNode(2);
    nodeR0.next.next = new ListNode(3);

    const nodeR1 = new ListNode(3);
    nodeR1.next = new ListNode(1);
    nodeR1.next.next = new ListNode(2);

    const nodeR2 = new ListNode(2);
    nodeR2.next = new ListNode(3);
    nodeR2.next.next = new ListNode(1);

    expect(rotateRight(node,999999999)).toEqual(nodeR0);
    expect(rotateRight(node,999999999+1)).toEqual(nodeR1);
    expect(rotateRight(nodeR0,999999999+2)).toEqual(nodeR2);

    
});