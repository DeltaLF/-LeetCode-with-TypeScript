import { findMinHeightTrees } from "../310_Minimum_Height_Trees";

it('find minheight tress',()=>{
    expect(findMinHeightTrees(1,[])).toEqual([0]);
    expect(findMinHeightTrees(2,[[0,1]])).toEqual([0,1]);

    expect(findMinHeightTrees(4,[[1,0],[1,2],[1,3]])).toEqual([1]);
    expect(findMinHeightTrees(6, [[3,0],[3,1],[3,2],[3,4],[5,4]])).toEqual([3,4]);
    // odd   0 - 1 - 2 - 3 - 4
    expect(findMinHeightTrees(5,[[0,1],[1,2],[2,3],[3,4]])).toEqual([2]);;    
    // even  0 - 1 - 2 - 3 - 4 -5 
    expect(findMinHeightTrees(6,[[0,1],[1,2],[2,3],[3,4],[4,5]])).toEqual([2,3]);;    
    
});