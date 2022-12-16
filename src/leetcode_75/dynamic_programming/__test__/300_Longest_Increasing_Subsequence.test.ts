import { lengthOfLIS } from "../300_Longest_Increasing_Subsequence";

it('tests lengthOfLTS function',()=>{
    // one 
    expect(lengthOfLIS([0])).toBe(1);
    expect(lengthOfLIS([0,0])).toBe(1);
    expect(lengthOfLIS([1,1,1])).toBe(1);
    expect(lengthOfLIS([1,2,2,2])).toBe(2);
    expect(lengthOfLIS([2,2,2,1])).toBe(1);

    expect(lengthOfLIS([10,9,2,5,3,7,101,18])).toBe(4);
    expect(lengthOfLIS([0,1,0,3,2,3])).toBe(4);

    expect(lengthOfLIS([9,8,7,6,5,4,3,2,1])).toBe(1);
    expect(lengthOfLIS([1,2,3,4,5,6,7,8])).toBe(8);
    expect(lengthOfLIS([2,4,6,8,10])).toBe(5);
});

