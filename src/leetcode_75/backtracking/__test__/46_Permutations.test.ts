import { permute } from "../46_Permutations";

it('tests permute function',()=>{
    expect(permute([1,2,3]).length).toBe(6);
    // expect(permute([1,2,3])).toContainEqual([);


    expect(permute([1,2])).toEqual([[2,1],[1,2]]);
    expect(permute([1])).toEqual([[1]]);

})