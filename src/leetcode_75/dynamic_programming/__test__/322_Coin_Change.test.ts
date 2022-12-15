import { coinChange } from "../322_Coin_Change";

it('find the min coins required within given amout', ()=>{
    expect(coinChange([1,3,5],0)).toBe(0);
    expect(coinChange([1,3],0)).toBe(0);

    
    expect(coinChange([1,3,5],1)).toBe(1);
    expect(coinChange([1,3,5],3)).toBe(1);
    expect(coinChange([1,3,5],5)).toBe(1);
    expect(coinChange([1,3,5],2)).toBe(2);
    expect(coinChange([1,3,5],4)).toBe(2);
    expect(coinChange([1,3,5],6)).toBe(2);
    expect(coinChange([1,3,5],11)).toBe(3);


    expect(coinChange([3,5],1)).toBe(-1);
    expect(coinChange([3,5],2)).toBe(-1);
    expect(coinChange([3,5],3)).toBe(1);
    expect(coinChange([3,5],4)).toBe(-1);
    expect(coinChange([3,5],5)).toBe(1);
    expect(coinChange([3,5],8)).toBe(2);
    expect(coinChange([3,5],13)).toBe(3);

});