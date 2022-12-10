import { maxSubArray } from "../53_Maximum_Subarray";

it('tests maxSubArray function',()=>{
    // one
    expect(maxSubArray([1])).toEqual(1);
    // two
    expect(maxSubArray([1,-1])).toEqual(1);
    expect(maxSubArray([-1,1])).toEqual(1);
    expect(maxSubArray([-1,-1])).toEqual(-1);

    expect(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])).toEqual(6);
    expect(maxSubArray([-5, -3, 2, 1, 6, 7, -7, -10, 20])).toEqual(20);
});