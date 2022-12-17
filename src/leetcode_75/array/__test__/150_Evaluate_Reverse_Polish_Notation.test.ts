import { evalRPN } from "../150_Evaluate_Reverse_Polish_Notation";

it('tests evalRPN fucntion',()=>{
    expect(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"])).toBe(22);
    /*
                              12
                    eval([ 0~i-2 ].concat(i+1))
    */
    expect(evalRPN(["4","-2","/","2","-3","-","-"])).toBe(-7)

})