import { canFinish } from "../207_Course_Schedule";

it('tests course schedule canFinish function false case',()=>{
    expect(canFinish(2,[[0,1],[1,0]])).toBe(false);
    expect(canFinish(5,[[0,1],[1,0]])).toBe(false);
    expect(canFinish(10,[[0,1],[1,0]])).toBe(false);
});

it('tests course schedule canFinish function true case',()=>{
    expect(canFinish(1,[])).toBe(true);
    expect(canFinish(2,[[0,1]])).toBe(true);
    expect(canFinish(2,[[1,0]])).toBe(true);
    expect(canFinish(3,[[1,0],[2,1]])).toBe(true);
    expect(canFinish(3,[[1,0],[2,0]])).toBe(true);
    expect(canFinish(10,[[1,0],[2,0]])).toBe(true);
    

});