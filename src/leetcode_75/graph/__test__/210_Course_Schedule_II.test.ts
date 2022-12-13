import { findOrder } from "../210_Course_Schedule_II";

it('tests the findOrder function with dependence issues',()=>{

    expect(findOrder(2,[[0,1],[1,0]])).toEqual([]);
    expect(findOrder(5,[[0,1],[1,0]])).toEqual([]);
    expect(findOrder(5,[[0,1],[2,3],[1,0]])).toEqual([]);
    expect(findOrder(10,[[0,1],[1,0]])).toEqual([]);

})

it('tests the findOrder function',()=>{
    expect(findOrder(1,[])).toEqual([0]);
    const two = findOrder(2,[]);
    expect(two.length).toBe(2);
    expect(two).toContain(0);
    expect(two).toContain(1);
    expect(findOrder(2,[[0,1]])).toEqual([1,0]);
    expect(findOrder(2,[[1,0]])).toEqual([0,1]);

    const four = findOrder(4, [[1,0],[2,0],[3,1],[3,2]]);
    expect(four.length).toBe(4);
    expect(four[0]).toBe(0);
    expect(four[3]).toBe(3);
    expect(four).toContain(1);
    expect(four).toContain(2);

})