import { minWindow } from "../76_Minimum_Window_Substring";

it('tests minWindow function',()=>{
    // empty
    expect(minWindow('','a')).toEqual('');
    expect(minWindow('a','ab')).toEqual('');
    expect(minWindow('a','b')).toEqual('');
    // one 
    expect(minWindow('a','a')).toEqual('a');
    expect(minWindow('ab','a')).toEqual('a');
    expect(minWindow('ba','b')).toEqual('b');

    // three
    expect(minWindow('aagsgvbc','abc')).toEqual('agsgvbc');
    expect(minWindow('aagsgvbc','gsg')).toEqual('gsg');
    expect(minWindow('aagsgvbc','ac')).toEqual('agsgvbc');

});