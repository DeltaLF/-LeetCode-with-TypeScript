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
 * @param {number} k
 * @return {ListNode}
 */
function reverseKGroup(head:ListNode<number>, k:number):ListNode<number> {

    // implement a reverse helper function

    // iterate through 

}

var reverseKGroupVerbose = function(head:ListNode<number>, k:number):ListNode<number> {
    /*
   1 2 3 4 5 6 7 8 9 10 
  [  ] [  ][ ] [ ] [ ]
  2 1 4 3 6 5 8 7

   0 -> (1 -> 2 -> 3 )->4
  input 1 and 3.  I keep 0,4 myself
  return 0->1  but 3->2->1  4
  we should make 0 ->3 1->4
    */

   function reverseOne(head:ListNode<number>, n:number=k): ListNode<number> {
    // return new head
    if( n < 2) return head;
    /**
     *  1 -> 2 -> 3 -> 4
     *        pre   n   pos
     *  null <- 1 <- 2  3 -> 4 -> 5
     * first loop
     *            pre   n   pos
     * null <- 1 <- 2  3 -> 4 -> 5
     * null <- 1 <- 2 <-3   4 -> 5
     */
    let preNode = head;
    let node = head.next!;
    let posNode = node?.next;
    preNode.next = null; // new tail
    node.next = preNode;
    while( n > 2 ){
        preNode = node;
        node = posNode!;
        posNode = posNode!.next;
        node.next = preNode; 
        n--;
    }
   return node;
   }  
   /**
    *  k=3
    *   1 2 3 4 5
    *       
    */
   let node:null | ListNode<number> = head; 
   for(let i =0; i < k - 1;i++){
    if(!!node){
        node = node.next;
    }else{
        break;
    }
   }
   if(!node) return head; // k > list.length;
   node = node.next; 
   const newHead = reverseOne(head);
   head.next = node; // head is the old head
   while(!!node){
    
    for(let i=0; i < k-1;i++){
        if(!!node){
            node = node.next;
        }else{
            break;
        }
    }
    if( !node) break;
    node = node!.next;
    let oldMiddleHead = head.next!;
    let middleHead = reverseOne(oldMiddleHead!)
    head.next = middleHead;
    oldMiddleHead.next = node;
    head = oldMiddleHead;
   }

   return newHead;  
};

export {reverseKGroup};