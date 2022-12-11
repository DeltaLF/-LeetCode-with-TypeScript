import { pacificAtlantic } from "../417_Pacific_Atlantic_Water_Flow";

it('tests the pacificAtlantic function',()=>{
    //expect(pacificAtlantic([[1]])).toEqual([[0,0]]);
    //expect(pacificAtlantic([[1,2],[2,1]])).toEqual([ [ 0, 1 ], [ 1, 0 ] ]);
    // plain
    expect(pacificAtlantic([[1,1],[1,1]])).toEqual([ [ 0, 1 ], [ 1, 1 ], [ 1, 0 ], [ 0, 0 ] ]);

    // mountain in middle
    expect(pacificAtlantic([[1,2,3],[1,3,1],[3,1,1]])).toEqual([[0,2],[1,1],[2,0]]);

    // basin
    expect(pacificAtlantic([[2,2,2,2],[2,1,1,2],[2,1,1,2],[2,2,2,2]])).toEqual( [
        [ 0, 3 ], [ 1, 3 ],
        [ 2, 3 ], [ 3, 3 ],
        [ 3, 2 ], [ 3, 1 ],
        [ 3, 0 ], [ 2, 0 ],
        [ 1, 0 ], [ 0, 0 ],
        [ 0, 1 ], [ 0, 2 ]
      ])

    expect(pacificAtlantic([[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]])).toEqual(   [
        [ 0, 4 ], [ 1, 4 ],
        [ 1, 3 ], [ 2, 2 ],
        [ 4, 0 ], [ 3, 0 ],
        [ 3, 1 ]
      ])



});