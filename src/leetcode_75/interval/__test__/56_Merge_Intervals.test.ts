import { merge } from "../56_Merge_Intervals";

it('tests merge function',()=>{
    expect(merge([[1,4]])).toEqual([[1,4]])
    expect(merge([[1,4],[4,5]])).toEqual([[1,5]])
    expect(merge([[3,6],[1,4]])).toEqual([[1,6]])
    expect(merge([[1,3],[2,6],[8,10],[15,18]])).toEqual([[1,6],[8,10],[15,18]])
    // extra large end
    expect(merge([[1,15],[2,6],[8,10],[15,18]])).toEqual([[1,18]])
    expect(merge([[1,20],[2,6],[8,10],[15,18]])).toEqual([[1,20]])
    

})