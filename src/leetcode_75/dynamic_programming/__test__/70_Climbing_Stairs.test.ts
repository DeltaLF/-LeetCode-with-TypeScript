import { climbStairs } from "../70_Climbing_Stairs";

it('tests climbStairs function',()=>{
    expect(climbStairs(1)).toEqual(1);
    expect(climbStairs(2)).toEqual(2);
    expect(climbStairs(3)).toEqual(3);
    expect(climbStairs(10)).toEqual(89);

});