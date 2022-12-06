import { characterReplacement } from "../424_Longest_Repeating_Character_Replacement";

it('tests characterReplacement function',()=>{
    // empty
    expect(characterReplacement('',0)).toEqual(0);
    // one
    expect(characterReplacement('A',0)).toEqual(1)
    expect(characterReplacement('A',1)).toEqual(1)
    // two
    expect(characterReplacement('AB',0)).toEqual(1)
    expect(characterReplacement('AB',1)).toEqual(2)
    expect(characterReplacement('AB',2)).toEqual(2)
    // three
    expect(characterReplacement('ABC',0)).toEqual(1)
    expect(characterReplacement('ABC',1)).toEqual(2)
    expect(characterReplacement('ABC',2)).toEqual(3)
    expect(characterReplacement('ABC',3)).toEqual(3)

    // four
    expect(characterReplacement('ABBB',0)).toEqual(3)
    expect(characterReplacement('ABBB',1)).toEqual(4)
    expect(characterReplacement('ABBB',2)).toEqual(4)
    expect(characterReplacement('ABBB',3)).toEqual(4)

    expect(characterReplacement('ACABBB',1)).toEqual(4)
    expect(characterReplacement('ACABBB',2)).toEqual(5)
    expect(characterReplacement('ABABBB',3)).toEqual(6)
    expect(characterReplacement('ACABBBACA',3)).toEqual(6)


    expect(characterReplacement('ABBBA',2)).toEqual(5)
    /*
      a  b  b  b  a
      s
            e
      {a:1,b:2}
      width s-e+1
      k=2
      max+k < s-e+1
     */



})