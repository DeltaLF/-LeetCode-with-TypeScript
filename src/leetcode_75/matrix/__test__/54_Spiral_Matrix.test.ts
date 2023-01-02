import { spiralOrder } from "../54_Spiral_Matrix";

it('tests spiralOrder function',()=>{
    // 1*1
    expect(spiralOrder([[1]])).toEqual([1]);
    // 1*2
    expect(spiralOrder([[1,2]])).toEqual([1,2]);
    // 2*1
    expect(spiralOrder([[1],[2]])).toEqual([1,2]);


    // 3*3
    expect(spiralOrder([[1,2,3],[4,5,6],[7,8,9]])).toEqual([1,2,3,6,9,8,7,4,5]);

    // 4*3
    expect(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]])).toEqual([1,2,3,4,8,12,11,10,9,5,6,7])

    // 5*2
    expect(spiralOrder([[0,1],[2,3],[4,5],[6,7],[8,9]])).toEqual([0,1,3,5,7,9,8,6,4,2])
})