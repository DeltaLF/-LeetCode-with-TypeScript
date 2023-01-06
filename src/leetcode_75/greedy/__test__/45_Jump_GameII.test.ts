import { jump } from "../45_Jump_GameII";

it('finds the minJump in jump gameII',()=>{
    expect(jump([1])).toBe(0);
    expect(jump([3,3,1,2,1,9,1,1,1,1,1,1,1,1,1])).toBe(3);

    expect(jump([2,3,1,1,4])).toBe(2);
    expect(jump([2,3,0,1,4])).toBe(2);
})