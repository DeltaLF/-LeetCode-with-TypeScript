import { reverseKGroup } from "../25_Reverse_Nodes_in_k-Group";
import { ListNode } from "../linked_list.type";


it('tests revereKGroup with length = 1, k=1',()=>{
    const node = new ListNode(0);
    const nodeAns = new ListNode(0);
    expect(reverseKGroup(node,1)).toEqual(nodeAns);
})

it('tests revereKGroup with length = 1, k=2',()=>{
    const node = new ListNode(0);
    const nodeAns = new ListNode(0);
    expect(reverseKGroup(node,1)).toEqual(nodeAns);
})

it('tests revereKGroup with length = 2, k=1',()=>{
    const node = new ListNode(0);
    node.next = new ListNode(1);
    const nodeAns = new ListNode(0);
    nodeAns.next = new ListNode(1);
    expect(reverseKGroup(node,1)).toEqual(nodeAns);
})

it('tests revereKGroup with length = 2, k=2',()=>{
    const node = new ListNode(0);
    node.next = new ListNode(1);
    const nodeAns = new ListNode(1);
    nodeAns.next = new ListNode(0);
    expect(reverseKGroup(node,2)).toEqual(nodeAns);
})

it('tests revereKGroup with length = 3, k=2',()=>{
    const node = new ListNode(0);
    node.next = new ListNode(1);
    node.next.next = new ListNode(2);
    const nodeAns = new ListNode(1);
    nodeAns.next = new ListNode(0);
    nodeAns.next.next = new ListNode(2);
    expect(reverseKGroup(node,2)).toEqual(nodeAns);
})

it('tests revereKGroup with length = 3, k=3',()=>{
    const node = new ListNode(0);
    node.next = new ListNode(1);
    node.next.next = new ListNode(2);
    const nodeAns = new ListNode(2);
    nodeAns.next = new ListNode(1);
    nodeAns.next.next = new ListNode(0);
    expect(reverseKGroup(node,3)).toEqual(nodeAns);
})


it('tests revereKGroup with length = 4, k = 2',()=>{
    const node = new ListNode(0);
    node.next = new ListNode(1);
    node.next.next = new ListNode(2);
    node.next.next.next = new ListNode(3);

    const nodeAns = new ListNode(1);
    nodeAns.next = new ListNode(0);
    nodeAns.next.next = new ListNode(3);
    nodeAns.next.next.next = new ListNode(2);
    expect(reverseKGroup(node,2)).toEqual(nodeAns);
})

it('tests revereKGroup with length = 4, k = 3',()=>{
    const node = new ListNode(0);
    node.next = new ListNode(1);
    node.next.next = new ListNode(2);
    node.next.next.next = new ListNode(3);

    const nodeAns = new ListNode(2);
    nodeAns.next = new ListNode(1);
    nodeAns.next.next = new ListNode(0);
    nodeAns.next.next.next = new ListNode(3);
    expect(reverseKGroup(node,3)).toEqual(nodeAns);
})