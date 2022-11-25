/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
import { ListNode } from "./heap.type"

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeKLists = function (lists:ListNode[]|null[]):ListNode|null {
    if(lists.length === 0) return null;   

    const result = new ListNode(-Infinity);
    let node:ListNode|null = result;
    // iterate through arrays
    while(true){
        let minInd =0;
        for(let i=0;i< lists.length;i++){
            if(!lists[minInd]){
                minInd+=1
                continue;
            }
            if(!lists[i]) continue;  // the listNode is alreadly iterated to the end
            if(lists[i]!.val < lists[minInd]!.val){
                minInd = i;
            }
        }
        if(minInd >= lists.length) break;
        node.next = lists[minInd]!
        node = node.next;
        lists[minInd] = lists[minInd]!.next;
    }
    return result.next;    
 }

 export {mergeKLists};