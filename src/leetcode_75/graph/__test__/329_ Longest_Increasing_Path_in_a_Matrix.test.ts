import { longestIncreasingPath } from "../329_ Longest_Increasing_Path_in_a_Matrix";

it('tests longestIncreasingPath function',()=>{
    /* 
      9 9 4
      6 6 8
      2 1 1
    */
    expect(longestIncreasingPath([[9,9,4],[6,6,8],[2,1,1]])).toBe(4);

})