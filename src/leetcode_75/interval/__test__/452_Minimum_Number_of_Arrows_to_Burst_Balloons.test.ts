import { findMinArrowShots } from "../452_Minimum_Number_of_Arrows_to_Burst_Balloons";

it('tests findMinArrowShots function',()=>{
    expect(findMinArrowShots([[5,10]])).toBe(1);
    expect(findMinArrowShots([[5,10],[4,5]])).toBe(1);
    expect(findMinArrowShots([[5,10],[2,3]])).toBe(2);
    expect(findMinArrowShots([[1,2],[3,4],[5,6],[7,8]])).toBe(4);
    expect(findMinArrowShots([[10,16],[2,8],[1,6],[7,12]])).toBe(2);
    expect(findMinArrowShots([[1,2],[2,3],[3,4],[4,5]])).toBe(2);

    expect(findMinArrowShots([[1,9],[7,16],[2,5],[7,12],[9,11],[2,10],[9,16],[3,9],[1,3]])).toBe(2);

})