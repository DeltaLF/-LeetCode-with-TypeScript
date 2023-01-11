import { minTime } from "../1443_Minimum_Time_to_Collect_All_Apples_in_a_Tree";

it('finds the minTime to collect all apples',()=>{
    // one
    expect(minTime(1,[],[true])).toBe(0);
    expect(minTime(1,[],[false])).toBe(0);

    //two
    expect(minTime(2,[[0,1]],[true,true])).toBe(2);
    expect(minTime(2,[[0,1]],[true,false])).toBe(0);
    expect(minTime(2,[[0,1]],[false,true])).toBe(2);
    expect(minTime(2,[[0,1]],[false,false])).toBe(0);

    expect(minTime(7,[[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], [false,false,true,false,true,true,false])).toBe(8);
    expect(minTime(7,[[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]],[false,false,true,false,false,true,false])).toBe(6);
    expect(minTime(7,[[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]],[false,false,false,false,false,false,false])).toBe(0);
})