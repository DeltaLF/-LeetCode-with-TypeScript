import { minDeletionSize } from "../944_Delete_Columns_to_Make_Sorted";

it('tests minDeleteionSize function',()=>{
    // 1
    expect(minDeletionSize(['a'])).toBe(0);
    // 2
    expect(minDeletionSize(['a','b'])).toBe(0);
    expect(minDeletionSize(['c','a'])).toBe(1);

    expect(minDeletionSize(['aaa','aaa','aaa'])).toBe(0);
    expect(minDeletionSize(['aaa','bda','caa'])).toBe(1);
    expect(minDeletionSize(['ccc','bbb','aaa'])).toBe(3);
    
    

})