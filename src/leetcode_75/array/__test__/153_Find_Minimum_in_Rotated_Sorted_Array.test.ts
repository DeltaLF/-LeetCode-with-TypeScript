import { findMin } from "../153_Find_Minimum_in_Rotated_Sorted_Array";

it('tests findMin function which find the minimum in a rotated sorted array',()=>{
    // 1
    expect(findMin([0])).toBe(0);
    // 2
    expect(findMin([0,1])).toBe(0);
    expect(findMin([1,0])).toBe(0);
    // 3
    expect(findMin([0,1,2])).toBe(0);
    expect(findMin([2,0,1])).toBe(0);
    expect(findMin([1,2,0])).toBe(0);
    // 4
    expect(findMin([0,1,2,3])).toBe(0);
    expect(findMin([3,0,1,2])).toBe(0);
    expect(findMin([2,3,0,1])).toBe(0);
    expect(findMin([1,2,3,0])).toBe(0);

});