import { rob } from "../213_House_Robber_II";

it('tests rob function',()=>{
    expect(rob([2])).toBe(2);

    expect(rob([2,1])).toBe(2);
    expect(rob([1,2])).toBe(2);

    expect(rob([1,3,5])).toBe(5);
    expect(rob([1,5,3])).toBe(5);
    expect(rob([5,3,1])).toBe(5);

    expect(rob([1,1,1,1,1,1,1,1,1])).toBe(4);



    expect(rob([1,2,3,1])).toBe(4);
})