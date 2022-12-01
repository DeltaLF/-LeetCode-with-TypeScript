import { containsDuplicate } from "../217_Contains_Duplicate";

it('tests containsDuplicate function with no duplicated conditions',()=>{
    // epmty
    expect(containsDuplicate([])).toBe(false);
    // one
    expect(containsDuplicate([1])).toBe(false);
    // multiple
    expect(containsDuplicate([1,3,4,5,6,7])).toBe(false);
    
});

it('tests containsDuplicate function with duplicated conditions',()=>{
    // two
    expect(containsDuplicate([0,0])).toBe(true);
    // head and end
    expect(containsDuplicate([1,0,2,4,5,6,7,1])).toBe(true);
    // multiple duplicated
    expect(containsDuplicate([1,9,9,1])).toBe(true);
    expect(containsDuplicate([1,1,1,1,1,1,1,1])).toBe(true);
   
})