import { setZeroes } from "../73_Set_Matrix_Zeroes";

it('tests setZeros function',()=>{
    // 1x1
    expect(setZeroes([[0]])).toEqual([[0]]);
    // 2x2
    expect(setZeroes([[1,1],[1,1]])).toEqual([[1,1],[1,1]]);
    expect(setZeroes([[0,1],[1,1]])).toEqual([[0,0],[0,1]]);

    expect(setZeroes([[1,1,1],[1,0,1],[1,1,1]])).toEqual([[1,0,1],[0,0,0],[1,0,1]]);
    expect(setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]])).toEqual([[0,0,0,0],[0,4,5,0],[0,3,1,0]]);

    expect(setZeroes([[1,2,3,4],[5,0,7,8],[0,10,11,12],[13,14,15,0]])).toEqual([[0,0,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]])

});