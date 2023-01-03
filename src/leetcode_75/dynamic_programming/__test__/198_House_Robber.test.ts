import { rob } from "../198_House_Robber";

it('tests rob function',()=>{
    expect(rob([0])).toBe(0);
    expect(rob([100])).toBe(100);
    expect(rob([100,200])).toBe(200)
    expect(rob([100,999,59])).toBe(999);

})

