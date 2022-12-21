import { possibleBipartition } from "../886_Possible_Bipartition";

it('tests if haters can be grouped',()=>{
    // true
    expect(possibleBipartition(1,[])).toBe(true);
    expect(possibleBipartition(4,[[1,2],[1,3],[1,4]])).toBe(true);
    expect(possibleBipartition(4,[[1,2],[1,3],[2,4]])).toBe(true);
    expect(possibleBipartition(40,[[1,2],[1,3],[2,4]])).toBe(true);

    // false

    expect(possibleBipartition(3,[[1,2],[1,3],[2,3]])).toBe(false);
    expect(possibleBipartition(30,[[1,2],[1,3],[2,3]])).toBe(false);
    expect(possibleBipartition(5, [[1,2],[2,3],[3,4],[4,5],[1,5]])).toBe(false);

});