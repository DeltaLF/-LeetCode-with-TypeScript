import { canCompleteCircuit } from "../134_Gas_Station";

it('tests canCompleteCircuit or not',()=>{
    expect(canCompleteCircuit([1],[1])).toBe(0);
    expect(canCompleteCircuit([1],[2])).toBe(-1);

    expect(canCompleteCircuit([1,2],[2,1])).toBe(1);
    expect(canCompleteCircuit([1,1],[1,2])).toBe(-1);

    expect(canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2])).toBe(3);
    
})