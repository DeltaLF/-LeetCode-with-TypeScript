import { lengthOfLongestSubstring } from "../3_Longest_Substring_Without_Repeating_Characters";

it('tests lengthOfLongestSubstring function', ()=>{
    // zero
    expect(lengthOfLongestSubstring('')).toEqual(0)
    // one 
    expect(lengthOfLongestSubstring('a')).toEqual(1)
    // two
    expect(lengthOfLongestSubstring('aa')).toEqual(1)
    expect(lengthOfLongestSubstring('ab')).toEqual(2)
    // three
    expect(lengthOfLongestSubstring('abc')).toEqual(3)
    expect(lengthOfLongestSubstring('aaa')).toEqual(1)
    expect(lengthOfLongestSubstring('aab')).toEqual(2)
    

    expect(lengthOfLongestSubstring('dvdf')).toEqual(3)    
    expect(lengthOfLongestSubstring('abcbaaesgasghj')).toEqual(5)
    expect(lengthOfLongestSubstring('abcba')).toEqual(3)



});