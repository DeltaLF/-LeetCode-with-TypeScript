import { maxIceCream } from "../1833_Maximum_Ice_Cream_Bars";

it('tests maxIceCream function',()=>{
    expect(maxIceCream([1],0)).toBe(0);
    expect(maxIceCream([1],1)).toBe(1);

    expect(maxIceCream([1,2,3,4,6,2,1,2,4,2,],10)).toBe(6);

})