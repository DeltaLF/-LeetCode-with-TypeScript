import { detectCapitalUse } from "../520_Detect_Capital";

it('tests capital usage with correct cases',()=>{
    // one
    expect(detectCapitalUse('a')).toBe(true);
    expect(detectCapitalUse('A')).toBe(true);
    // two
    expect(detectCapitalUse('ab')).toBe(true);
    expect(detectCapitalUse('AB')).toBe(true);
    expect(detectCapitalUse('Ab')).toBe(true);
    // three
    expect(detectCapitalUse('abc')).toBe(true);
    expect(detectCapitalUse('ABC')).toBe(true);
    expect(detectCapitalUse('Abc')).toBe(true);
})

it('tests capital usage with incorrect cases',()=>{
    // two
    expect(detectCapitalUse('aB')).toBe(false);
    //three
    expect(detectCapitalUse('abC')).toBe(false);
    expect(detectCapitalUse('ABc')).toBe(false);
    expect(detectCapitalUse('AbC')).toBe(false);
    expect(detectCapitalUse('aBC')).toBe(false);


})
