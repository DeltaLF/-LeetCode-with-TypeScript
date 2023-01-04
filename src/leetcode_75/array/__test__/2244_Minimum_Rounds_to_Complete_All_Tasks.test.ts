import { minimumRounds } from "../2244_Minimum_Rounds_to_Complete_All_Tasks";

it('tests minimumRounds function',()=>{
    expect(minimumRounds([1])).toBe(-1);
    expect(minimumRounds([1,1])).toBe(1);
    expect(minimumRounds([1,1,1])).toBe(1);
    expect(minimumRounds([1,1,1,1])).toBe(2);

    expect(minimumRounds([1,1,1,3])).toBe(-1);
    expect(minimumRounds([2,3,3])).toBe(-1);

    expect(minimumRounds([2,2,3,3,2,4,4,4,4,4])).toBe(4);
    expect(minimumRounds([2,4,3,3,2,4,4,2,4,4])).toBe(4);
    expect(minimumRounds([2,2,3,3,2,4,4,4,4,4,1])).toBe(-1);

})