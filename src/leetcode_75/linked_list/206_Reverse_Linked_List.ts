/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
import { ListNode } from "./linked_list.type";
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head:ListNode<number>|null):ListNode<number>|null {    
    if(!head) return null;
    if(!head.next) return head; // only one node
    /*
     prevNode  ->   Node   ->  nextNode
     head         head.next   head.next.next
     reverse:
     prevNode  <-   Node   -<  nextNode
     */

     /*
     prev=head=0 node=1 nextNode=2
     temp = nextNode
     head(prev)   <- node  |  nextNode  ->  ...
                   prev         node       nextNode
      */
    let prevNode:null|ListNode<number> = head;
    let node:null|ListNode<number> = head.next;
    let nextNode:null|ListNode<number> = !!node? node.next : null;
    let temp:null|ListNode<number> = null;
    prevNode.next = null;
    while(!!node){
        temp = node.next;
        node.next = prevNode;
        prevNode = node;
        node = temp;
        nextNode = !!nextNode ? nextNode.next : null;
    }
    return prevNode;
    };

export {reverseList};