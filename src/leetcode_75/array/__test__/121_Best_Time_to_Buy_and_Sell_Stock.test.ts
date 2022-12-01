import { maxProfit } from "../121_Best_Time_to_Buy_and_Sell_Stock";

it('tests maxProfit function for no profits conditions',()=>{
    expect(maxProfit([2,1])).toEqual(0);
    expect(maxProfit([9,8,5,4,2,1])).toEqual(0);

});

it('tests maxProfit function for max profits conditions',()=>{
    expect(maxProfit([7,1,5,3,6,4])).toEqual(5);
    expect(maxProfit([1,5,32,7,5,2,1])).toEqual(31);

});