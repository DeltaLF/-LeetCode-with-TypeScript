import { answerQueries } from "../2389_Longest_Subsequence_With_Limited_Sum";

it('tests answerQueries',()=>{
    expect(answerQueries([4,5,2,1],[3,10,21])).toEqual([2,3,4]);
    expect(answerQueries([2,4,3,5],[1,10,21])).toEqual([0,3,4]);
    expect(answerQueries([1,1,1,1,1,1],[0,1,2,3,100])).toEqual([0,1,2,3,6]);
});