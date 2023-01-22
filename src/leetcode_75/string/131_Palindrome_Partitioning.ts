function partition(s: string): string[][] {
  /*
        Input: s = "aab"
        Output: [["a","a","b"],["aa","b"]]

        evalate aab
        i=0 prevPal=[]
        if(prevPal.at(-1) + ) 


        */
  function isPalindrome(str: string): boolean {
    if (!str) return false;
    let head = 0;
    let end = str.length - 1;
    while (head <= end) {
      if (str[head] !== str[end]) return false;
      head++;
      end--;
    }
    return true;
  }

  const answer: string[][] = [];
  function helper(i: number = 0, prevPal: string[] = []) {
    if (i >= s.length) {
      if (isPalindrome(prevPal.at(-1)!)) {
        answer.push(prevPal);
      }
      return;
    }

    // not merge current
    if (i === 0 || isPalindrome(prevPal.at(-1)!)) {
      // only the last str is allowed to be not palidrome
      const prevPalCopy = prevPal.slice();
      prevPalCopy.push(s[i]);
      helper(i + 1, prevPalCopy);
    }

    if (i > 0) {
      // merge current
      prevPal[prevPal.length - 1] += s[i];
      helper(i + 1, prevPal.slice());
    }

    return;
  }
  helper();

  return answer;
}

export { partition };
