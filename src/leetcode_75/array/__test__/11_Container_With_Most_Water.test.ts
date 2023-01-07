import { maxArea } from "../11_Container_With_Most_Water";

it('finds the maxArea in given container number array',()=>{
    // two
    expect(maxArea([5,3])).toBe(3);
    expect(maxArea([9,3])).toBe(3);
    
    // three
    expect(maxArea([5,3,1])).toBe(3);

    expect(maxArea([3,4,5,3,2,1])).toBe(9);
    expect(maxArea([1,8,6,2,5,4,8,3,7])).toBe(49);
    
})