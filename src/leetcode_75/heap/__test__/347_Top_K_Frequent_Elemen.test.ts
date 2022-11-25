import { topKFrequent } from "../347_Top_K_Frequent_Elements";

it('tests topKFrequent',()=>{
    // one
    const one = [1]
    expect(topKFrequent(one,1)).toEqual([1]);
    // two
    const two = [1,2]
    expect(topKFrequent(two,1)).toEqual([2,1]);
    expect(topKFrequent(two,2)).toEqual([2,1]);

    // mutiple
    const mutiple = [1,1,1,2,2,3]
    expect(topKFrequent(mutiple,1)).toEqual([1]);
    expect(topKFrequent(mutiple,2)).toEqual([1,2]);

    // duplicated
    const dup = [1,1,1,1,1]
    expect(topKFrequent(dup,1)).toEqual([1]);

});