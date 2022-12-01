import { reverseList } from "../206_Reverse_Linked_List";
import {ListNode} from "../linked_list.type"

it('tests reverseList function',()=>{
    // empty
    expect(reverseList(null)).toBeNull();
    // one
    const rootOne = new ListNode(0);
    expect(reverseList(rootOne)).toEqual(rootOne);
    // two 
    const rootTwo = new ListNode(0);
    rootTwo.next = new ListNode(1);
    const rootTwoReverse = new ListNode(1);
    rootTwoReverse.next = new ListNode(0);
    expect(reverseList(rootTwo)).toEqual(rootTwoReverse);
    expect(rootTwo.next).toBeNull(); // becomes tail
    // three
    const rootThree = new ListNode(0);
    rootThree.next = new ListNode(1);
    rootThree.next.next = new ListNode(2);
    const rootThreeReverse = new ListNode(2);
    rootThreeReverse.next = new ListNode(1);
    rootThreeReverse.next.next = new ListNode(0);
    expect(reverseList(rootThree)).toEqual(rootThreeReverse);
    expect(rootThree.next).toBeNull();    

    // four
    const rootFour = new ListNode(0);
    rootFour.next = new ListNode(1);
    rootFour.next.next = new ListNode(2);
    rootFour.next.next.next = new ListNode(3);
    const rootFourReverse = new ListNode(3);
    rootFourReverse.next = new ListNode(2);
    rootFourReverse.next.next = new ListNode(1);
    rootFourReverse.next.next.next = new ListNode(0);
    expect(reverseList(rootFour)).toEqual(rootFourReverse);
    expect(rootFour.next).toBeNull();    

});