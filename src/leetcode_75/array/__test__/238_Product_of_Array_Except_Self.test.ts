import { productExceptSelf } from "../238_Product_of_Array_Except_Self";

it('tests productExpectSelf functions',()=>{
    // 2
    const arr2 = [3,5]
    expect(productExceptSelf(arr2)).toEqual([5,3]);
    //3 
    const arr3  = [7,5,8]
    expect(productExceptSelf(arr3)).toEqual([40, 56, 35]);

    const arr4 = [2,4,5,6]
    expect(productExceptSelf(arr4)).toEqual([120, 60, 48, 40]);

    // with 0
    const arr40 = [2,4,5,0]
    expect(productExceptSelf(arr40)).toEqual([0,0,0,40]);
    // all 0
    const arr0 = [0,0,0,0]
    expect(productExceptSelf(arr0)).toEqual([0,0,0,0]);
    



})