import { DisjointSet } from "../Disjoint_Set_Union";

it('tests DisjointSet class',()=>{
    const disjointSet = new DisjointSet(8);
    disjointSet.unionSets(0,1);
    disjointSet.unionSets(1,3);
    disjointSet.unionSets(1,2);
    disjointSet.unionSets(2,4);
    disjointSet.unionSets(2,5);
    disjointSet.unionSets(4,6);
    disjointSet.unionSets(5,7);
    expect(disjointSet.size).toEqual([8,1,1,1,1,1,1,1])
    expect(disjointSet.parent).toEqual([0,0,0,0,0,0,0,0])

})