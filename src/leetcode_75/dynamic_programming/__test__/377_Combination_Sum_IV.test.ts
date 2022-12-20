import { combinationSum4 } from "../377_Combination_Sum_IV";

it('tests combinationSum4 function',()=>{
    expect(combinationSum4([1,2,3,100],1)).toBe(1);

    expect(combinationSum4([1,2,3],4)).toBe(7);
    expect(combinationSum4([2,3],1)).toBe(0);
    expect(combinationSum4([3,1,2,4],4)).toBe(8);
});