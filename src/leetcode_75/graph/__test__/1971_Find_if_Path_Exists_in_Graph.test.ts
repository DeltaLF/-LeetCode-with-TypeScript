import { validPath } from "../1971_Find_if_Path_Exists_in_Graph";

it('tests if there is a valid path',()=>{
    expect(validPath(1,[],0,0)).toBe(true);
    expect(validPath(1,[],0,0)).toBe(true);

    expect(validPath(6,[[0,1],[0,2],[3,5],[5,4],[4,3]],0,5)).toBe(false);
    expect(validPath(6,[[0,1],[0,2],[3,5],[5,4],[4,3]],1,3)).toBe(false);

    expect(validPath(6,[[0,1],[0,2],[3,5],[5,4],[4,3]],1,2)).toBe(true);
    expect(validPath(6,[[0,1],[0,2],[3,5],[5,4],[4,3]],0,1)).toBe(true);
    expect(validPath(6,[[0,1],[0,2],[3,5],[5,4],[4,3]],3,5)).toBe(true);

})