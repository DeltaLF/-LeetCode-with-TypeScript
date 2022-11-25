import { mergeKLists } from "../23_Merge k Sorted Lists";
import {ListNode} from "../heap.type";

it('tests mergeKLists',()=>{
    // empty
    expect(mergeKLists([])).toBeNull;
    // init
    const k1 = new ListNode(0,new ListNode(4,new ListNode(5)))
    const k2 = new ListNode(1,new ListNode(3,new ListNode(4)))
    const k3 = new ListNode(2,new ListNode(6,new ListNode(15)))
    expect(mergeKLists([k1])).toEqual(k1)
    const k123Lists = [k1,k2,k3]
    expect(mergeKLists(k123Lists)).toEqual(new ListNode(0,new ListNode(1,new ListNode(2,new ListNode(3,new ListNode(4,new ListNode(4,new ListNode(5,new ListNode(6,new ListNode(15))))))))))


})