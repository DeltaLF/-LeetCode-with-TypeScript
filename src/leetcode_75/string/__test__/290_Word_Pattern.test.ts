import { wordPattern } from "../290_Word_Pattern";

it('tests wordPattern with true result',()=>{
    // one
    expect(wordPattern('a','one')).toBe(true);

    expect(wordPattern('aaabb','one one one two two')).toBe(true);

})

it('tests wordPattern with false result',()=>{

    expect(wordPattern('aa','one')).toBe(false);
    expect(wordPattern('a','one one')).toBe(false);

    expect(wordPattern('aaabb','one one one tww two')).toBe(false);
    expect(wordPattern('aabb','one one one one')).toBe(false);
    
})