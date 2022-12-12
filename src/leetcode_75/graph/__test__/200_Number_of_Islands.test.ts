import { numIslands } from "../200_Number_of_Islands";

it('finds out the island count from given map',()=>{
    // single point
    expect(numIslands([[0]])).toBe(0);
    expect(numIslands([[1]])).toBe(1);
    // 2x2
    expect(numIslands([[0,0],[0,0]])).toBe(0);
    expect(numIslands([[1,0],[0,0]])).toBe(1);
    expect(numIslands([[1,0],[0,1]])).toBe(2);
    expect(numIslands([[1,1],[1,1]])).toBe(1);


    expect(numIslands([
        [1,1,1,1,0],
        [1,1,0,1,0],
        [1,1,0,0,0],
        [0,0,0,0,0]
      ])).toBe(1);


});