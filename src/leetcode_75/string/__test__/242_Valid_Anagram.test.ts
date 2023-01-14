import { isAnagram } from "../242_Valid_Anagram";

it('tests isAnagram or not false cases',()=>{
    expect(isAnagram('b','a')).toBe(false);
    expect(isAnagram('aa','a')).toBe(false);
})

it('tests isAnagram or not true cases',()=>{
    expect(isAnagram('a','a')).toBe(true);
    expect(isAnagram('aaaaa','aaaaa')).toBe(true);
    expect(isAnagram('abba','baab')).toBe(true);
    expect(isAnagram('abcddcba','aabbccdd')).toBe(true);


})