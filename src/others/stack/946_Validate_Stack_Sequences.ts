function validateStackSequences(pushed: number[], popped: number[]): boolean {
  /*
    since stack must <= pushed
    we can use pushed itself as stack
     */
  let pushInd = 0;
  let popInd = 0;
  for (let toPush of pushed) {
    pushed[pushInd] = toPush;
    pushInd++;
    while (pushInd > 0 && pushed[pushInd - 1] === popped[popInd]) {
      pushInd--;
      popInd++;
    }
  }
  return popInd === popped.length;
}

function validateStackSequencesSpaceN(
  pushed: number[],
  popped: number[]
): boolean {
  /*
      Input: pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
      Output: true
  
         1 2 3 4 5   [1 4 3 2 5]
      iterate through push
      if pushed[i] !== currPop 
        push
      else
        pop
      1 2 3 4 5   popped: 4 5 3 2 1
      p=0
      [1,2,3]
       */
  const stack: number[] = [];
  let currPop = 0;
  for (const toPush of pushed) {
    if (toPush !== popped[currPop]) {
      stack.push(toPush);
    } else {
      currPop++;
      while (stack.length > 0 && stack[stack.length - 1] === popped[currPop]) {
        stack.pop();
        currPop++;
      }
    }
  }

  while (stack.length > 0 && stack[stack.length - 1] === popped[currPop]) {
    stack.pop();
    currPop++;
  }
  return stack.length === 0;
}

export { validateStackSequences };
