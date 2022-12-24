import { numTilings } from "../790_Domino_and_Tromino_Tiling";

it('tests numTilings',()=>{
    expect(numTilings(1)).toBe(1);
    expect(numTilings(2)).toBe(2);
    expect(numTilings(3)).toBe(5);
    expect(numTilings(20)).toBe(3418626);
    expect(numTilings(1000)).toBeGreaterThan(3418626);
    

})