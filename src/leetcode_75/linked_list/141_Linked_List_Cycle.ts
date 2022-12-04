/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
import { ListNode } from "./linked_list.type";
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head:ListNode<number>):boolean {
    if(!head) return false
    // use listNode array to avoid duplicated node.val
    const hashMap:{[key:string]: ListNode<number>[]} = {};

    // iterate through LinkList and store nodes into haspMap
    let node = head;
    while(!!node.next){
        if( !hashMap[node.val.toString()] ){
            hashMap[node.val.toString()] = [node];
        }else{
            for(let visitedNode of hashMap[node.val.toString()]){
                if(visitedNode === node) return true;
            }
            // same node.val but not actually visited
            hashMap[node.val.toString()].push(node);
        }
        node = node.next;
    }

    return false
    
};

export {hasCycle}