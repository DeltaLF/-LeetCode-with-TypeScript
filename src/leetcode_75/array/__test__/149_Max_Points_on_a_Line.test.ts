import { maxPoints } from "../149_Max_Points_on_a_Line";

it('find maxPoints in the same line',()=>{
    expect(maxPoints([[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]])).toBe(4);

    // horzontal line
    expect(maxPoints([[0,0],[1,0]])).toBe(2);

    // vertical line
    expect(maxPoints([[0,0],[0,1]])).toBe(2);


    expect(maxPoints([[0,0],[0,1],[2,3]])).toBe(2);

    expect(maxPoints([[0,0],[0,1],[2,3],[1,0]])).toBe(2);

    expect(maxPoints([[5151,5150],[0,0],[5152,5151]])).toBe(2);
})