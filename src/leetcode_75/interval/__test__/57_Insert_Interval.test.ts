import { insert } from "../57_Insert_Interval";

it('tests insert interval array function wihtout merging', ()=>{

    // no modifying needed
    // head
    expect(insert([[0,1],[2,3],[6,7],[8,10],[12,16]],[-2,-1])).toEqual([[-2,-1],[0,1],[2,3],[6,7],[8,10],[12,16]])
    // middle
    expect(insert([[0,1],[2,3],[6,7],[8,10],[12,16]],[4,5])).toEqual([[0,1],[2,3],[4,5],[6,7],[8,10],[12,16]])
    // end
    expect(insert([[0,1],[2,3],[6,7],[8,10],[12,16]],[18,20])).toEqual([[0,1],[2,3],[6,7],[8,10],[12,16],[18,20]])
})

it('tests insert interval array function with merging', ()=>{

    // no modifying needed
    // head merge one
    expect(insert([[0,1],[2,3],[6,7],[8,10],[12,16]],[-2,1])).toEqual([[-2,1],[2,3],[6,7],[8,10],[12,16]])
    // head merge multiple
    expect(insert([[0,1],[2,3],[6,7],[8,10],[12,16]],[-2,9])).toEqual([[-2,10],[12,16]])
    // head merge all
    expect(insert([[0,1],[2,3],[6,7],[8,10],[12,16]],[-2,20])).toEqual([[-2,20]])

    // middle
    expect(insert([[0,1],[2,3],[6,7],[8,10],[12,16]],[6,8])).toEqual([[0,1],[2,3],[6,10],[12,16]])
    // end
    expect(insert([[0,1],[2,3],[6,7],[8,10],[12,16]],[13,20])).toEqual([[0,1],[2,3],[6,7],[8,10],[12,20]])
})