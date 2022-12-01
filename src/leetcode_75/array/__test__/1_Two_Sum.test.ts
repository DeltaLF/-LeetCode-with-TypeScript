import { twoSum } from "../1_Two_Sum";

it('tests twoSum function',()=>{
    // two
    expect(twoSum([1,2],3)).toEqual([0,1]);
    expect(twoSum([3,2,4],6)).toEqual([1,2]);
    expect(twoSum([3,3],6)).toEqual([0,1]);
    // mutiple
    expect(twoSum([5,2,10,1,3],15)).toEqual([0,2]);

})