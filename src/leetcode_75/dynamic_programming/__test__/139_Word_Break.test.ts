import { wordBreak } from "../139_Word_Break";

it('tests wordBreak function',()=>{
    expect(wordBreak('leetcode',['leet','code'])).toBe(true);
    expect(wordBreak("applepenapple",['apple','pen'])).toBe(true)
    expect(wordBreak("catsandog",["cats","dog","sand","and","cat"])).toBe(false)
    expect(wordBreak("dogandandgoddogalala",["dogan","dog","and","d","god","alala"])).toBe(true)
    expect(wordBreak("sssslasssla",["s","la"])).toBe(true)
    expect(wordBreak("a",["s"])).toBe(false)
    expect(wordBreak("aaaaaaa",["aaaa","aaa"])).toBe(true);

});