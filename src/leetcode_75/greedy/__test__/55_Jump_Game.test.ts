import { canJump } from "../55_Jump_Game";

it('tests canJump game',()=>{
    // true
    expect(canJump([1])).toBe(true);
    expect(canJump([0])).toBe(true);
    expect(canJump([2])).toBe(true);
    expect(canJump([2,0])).toBe(true);    
    expect(canJump( [2,3,1,1,4])).toBe(true);
    expect(canJump( [5,3,1,1,4])).toBe(true);


    // false
    expect(canJump([0,1])).toBe(false);
    expect(canJump( [3,2,1,0,4])).toBe(false);
})