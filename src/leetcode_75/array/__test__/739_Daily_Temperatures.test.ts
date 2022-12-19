import { dailyTemperatures } from "../739_Daily_Temperatures";

it('tests dailyTemperatures function',()=>{
    expect(dailyTemperatures([5,4,3,2,1])).toEqual([0,0,0,0,0])
    expect(dailyTemperatures([1,2,3,4,5])).toEqual([1,1,1,1,0])
    expect(dailyTemperatures([73,74,75,71,69,72,76,73])).toEqual([1,1,4,2,1,1,0,0])
    expect(dailyTemperatures([89,62,70,58,47,47,46,76,100,70])).toEqual([8,1,5,4,3,2,1,1,0,0])

});