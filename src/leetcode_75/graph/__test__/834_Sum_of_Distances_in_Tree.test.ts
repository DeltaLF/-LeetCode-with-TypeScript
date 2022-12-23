import { sumOfDistancesInTree } from "../834_Sum_of_Distances_in_Tree";

it('sum all distances in tree',()=>{
    expect(sumOfDistancesInTree(1,[[]])).toEqual([0]);
    expect(sumOfDistancesInTree(2,[[0,1]])).toEqual([1,1]);
    // 0-1-2
    expect(sumOfDistancesInTree(3,[[0,1],[1,2]])).toEqual([3,2,3]);
    // 1 - 0 - 2 
    expect(sumOfDistancesInTree(3,[[0,1],[0,2]])).toEqual([2,3,3]);
    
    expect(sumOfDistancesInTree(6,[[0,1],[0,2],[2,3],[2,4],[2,5]])).toEqual([8,12,6,10,10,10]);

})