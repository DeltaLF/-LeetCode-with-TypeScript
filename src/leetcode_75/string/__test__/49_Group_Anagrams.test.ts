import { groupAnagrams } from "../49_Group_Anagrams";

it('tests groupAnagrams function',()=>{
    groupAnagrams(["eat","tea","tan","ate","nat","bat"])
    expect(groupAnagrams([''])).toEqual([['']]);
    expect(groupAnagrams(['a'])).toEqual([['a']])
    expect(groupAnagrams(['ab','ba'])).toEqual([['ab','ba']])
    expect(groupAnagrams(['ac','ab','ba','ca'])).toEqual([['ac','ca'],['ab','ba']])
    expect(groupAnagrams(["bdddddddddd","bbbbbbbbbbc"])).toEqual([['bdddddddddd'],['bbbbbbbbbbc']])
})