import { longestConsecutive } from "../128_Longest_Consecutive_Sequence";

it('tests longestConsecutive function',()=>{
    expect(longestConsecutive([])).toEqual(0);
    // one
    expect(longestConsecutive([0])).toEqual(1);
    // two
    expect(longestConsecutive([1,3])).toEqual(1);
    expect(longestConsecutive([1,2])).toEqual(2);
    expect(longestConsecutive([1,2,0,1])).toEqual(3);
    expect(longestConsecutive([1,2,2,2,2,1,0,-1])).toEqual(4);

    // negative
    expect(longestConsecutive([0,-1])).toEqual(2);

    
})