import { rotate } from "../48_Rotate_Image";

it('rorate matrix 1x1',()=>{
    const matrix = [[1]]
    rotate(matrix)
    expect(matrix).toEqual([[1]]);
})


it('rorate matrix 2x2',()=>{
    const matrix = [[1,2],[3,4]]
    rotate(matrix)
    expect(matrix).toEqual([[3,1],[4,2]]);
})


it('rorate matrix 3x3',()=>{
    const matrix = [[1,2,3],[4,5,6],[7,8,9]]
    rotate(matrix)
    expect(matrix).toEqual([[7,4,1],[8,5,2],[9,6,3]]);
})

it('rorate matrix 4x4',()=>{
    const matrix =[[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
    rotate(matrix)
    expect(matrix).toEqual([[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]);
})