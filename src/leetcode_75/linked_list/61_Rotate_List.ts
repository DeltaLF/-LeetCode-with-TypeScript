/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
import { ListNode } from "./linked_list.type";

function rotateRight(head:ListNode<number>|null, k:number):ListNode<number>|null{
    // optimze: use 3 var to replace the whole array
    if( !head || !head.next) return head;
    let node:null|ListNode<number> = head;
    /**
     *  1 -> 2 -> 3 -> 4 -> 5
     *  k =2
     *  new head: 5 - 2 + 1 = 4
     *  new tail: 5 - 2  = 3
     */
    let len = 1;
    while(!!node.next){
        node = node.next;
        len++;
    }
    k = k % len;
    if(k === 0) return head; // rotat a full circule 
    node.next = head;        
    // make a circular linked list then cut it between new tail and new head
    /**
     *  0 -> 1 -> 2
     *  k=1 len:3
     *  new head: len - k: 2
     *  new tail: len - k -1: 1
     */
    node = head;
    for(let i=0; i < len - k -1;i++){
        node = node.next!; // node become new tail
    }
    head = node.next;
    node.next = null;
    return head;
};

var rotateRightArr = function(head: ListNode<number>|null, k:number):ListNode<number>|null {
    if( !head || !head.next) return head;
    const listStack:ListNode<number>[] = [];
    let node:null | ListNode<number> = head;
    while(!!node){
        listStack.push(node);
        node = node.next;
    }
    k = k % listStack.length;
    /*
     1 -> 2 -> 3 -> 4 -> 5
     for k:3
     lenght: 5
     head: for i=1; i<5;i++
     new head: length - k
     new tail: length - k - 1
    */
   if( k === 0) return head;
   listStack[listStack.length -1].next = listStack[0];
   listStack[listStack.length - k - 1].next = null;
   return listStack[listStack.length - k]

};

export {rotateRight};