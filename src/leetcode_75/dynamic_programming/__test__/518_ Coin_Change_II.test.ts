import { change } from "../518_ Coin_Change_II";

it('tests coin change function',()=>{
    // 0
    expect(change(0,[1,2,3])).toBe(1);
    // 3
    expect(change(3,[1])).toBe(1);
    expect(change(3,[1,2])).toBe(2);
    expect(change(3,[1,2,3])).toBe(3);

});