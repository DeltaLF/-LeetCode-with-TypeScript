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
 * @return {void} Do not return anything, modify head in-place instead.
 */

function reorderList(head:ListNode<number>):void{
    /*
    instead of using whole array to memoize
    we can use an extra node to do that

    odd case:
    head          middle
     0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6
    target:
    0 -> 6 -> 1 -> 5 -> 2 -> 4 -> 3
    
    reverse from middle
    6 -> 5 -> 4 -> 3
    now what we got:
    0 -> 1 -> 2 + 6 -> 5 -> 4 -> 3

    even case:
    ? should pick 2 or 3
    head         middle
    0 -> 1 -> 2 -> 3 -> 4 -> 5 
    0 -> 5 -> 1 -> 4 -> 2 -> 3
    */

    if(!head || !head.next || !head.next.next) return;
    // step 1: find the middle
    let listLength = 1;
    let node : null | ListNode<number>= head;
    while(!!node.next){
        node = node.next;
        listLength++;
    }
    node = head;
    for(let i = 0; i < Math.ceil(listLength/2); i++){
        // fetch the middle
        node = node.next!;
    }
    const middle = node;
    // step 2: reverse from middle
    function reverseLinkedList(head:ListNode<number>):ListNode<number>{
        if(!head.next) return head;
        let preNode = head;
        let node:  ListNode<number> = head.next;
        let posNode: null | ListNode<number> = node.next;
        preNode.next = null;
        node.next = preNode;
        /*
        pre  n    pos
        0 -> 1 -> 2 -> 3
        0 <- 1 <- 2 <- 3
        */
        /*
        pre:0 node:1 pos:2
        0 <- 1 2->3
        first loop
        pre:1
        node:2
        pos:3
        2 -> 1
        0 <- 1 <- 2 3
        second loop
        pre:2 
        node:3
        pos:4(null)
        3 -> 2
        0 <- 1 <- 2 <- 3
         */
       while(!!posNode){
        preNode = node;
        node = posNode!;
        posNode = posNode!.next;
        node.next = preNode;
       }
       return node;
    }
    let reversedMiddle:ListNode<number>|null = reverseLinkedList(middle);
    // step 3: merge head with reversed middle
    /*
    3: 0->1->(2)  and 2
    4: 0->1->(2) and 3->2
      loop1:
       temp:1
       0->3
       rev:2
       0->3->1
       node:1
      loop2:
       temp:null
    */
   node = head;
   console.log("node", node, 'reverseMIddle',reversedMiddle)
   let temp:ListNode<number> | null;
   while( !!reversedMiddle ){
    temp = node!.next;
    node!.next = reversedMiddle;
    reversedMiddle = reversedMiddle!.next;
    node!.next.next = temp;
    node = temp;
   }
   if(!!node?.next) node.next= null;
};


var reorderListWithMemoizedhelpArr = function(head:ListNode<number>):void {
    /*
    time complexity to find index i from a linked list: O(n)
    if directly iterate through and change the order
    time complexity will be O(n^2)
    while space complexity is O(1)

    what we can do is to trade off time complexity with space complexity
    time: O(n)
    space: O(n)
    */
    if(!head || !head.next || !head.next.next) return;
    const memoizedArr:ListNode<number>[] = [head];
   let node = head;
   while(!!node.next){
    memoizedArr.push(node.next);
    node = node.next;
   }
   let j = memoizedArr.length - 1;
   let i = 0;
   while(i < j){
    memoizedArr[i].next = memoizedArr[j];
    memoizedArr[j].next = memoizedArr[i + 1];
    j--;
    i++;
   }
   // make sure the tail doesn't link to any node
   memoizedArr[ Math.floor( (memoizedArr.length)/2 ) ].next = null;
   
};

export {reorderList};