import { longestCommonSubsequence } from "../1143_Longest_Common_Subsequence";

it('tests longestCommonSubsequence function',()=>{
    // zero
    expect(longestCommonSubsequence('','')).toBe(0);
    expect(longestCommonSubsequence('a','')).toBe(0);
    expect(longestCommonSubsequence('','a')).toBe(0);
    expect(longestCommonSubsequence('a','b')).toBe(0);

    // one
    expect(longestCommonSubsequence('a','a')).toBe(1);
    expect(longestCommonSubsequence('a','aaaaaa')).toBe(1);
    expect(longestCommonSubsequence('ab','ca')).toBe(1);

    // reverse
    expect(longestCommonSubsequence('abc','cba')).toBe(1);
    expect(longestCommonSubsequence('abcde','edcba')).toBe(1);

    expect(longestCommonSubsequence('abcde','abcde')).toBe(5);
    expect(longestCommonSubsequence('abcde','afasgbgasgacdghsgdgsae')).toBe(5);

    
    expect(longestCommonSubsequence('pmjghexybyrgzczy','hafcdqbgncrcbihkd')).toBeGreaterThan(0);

});