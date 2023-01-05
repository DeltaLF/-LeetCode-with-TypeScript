import { countSubstrings } from "../647_Palindromic_Substrings";

it('tests countSubstrings function',()=>{
    expect(countSubstrings('a')).toBe(1);
    expect(countSubstrings('aa')).toBe(3);
    expect(countSubstrings('ab')).toBe(2);

    expect(countSubstrings('aaa')).toBe(6);

    expect(countSubstrings('aaaa')).toBe(10);
    expect(countSubstrings('aabb')).toBe(6)

})