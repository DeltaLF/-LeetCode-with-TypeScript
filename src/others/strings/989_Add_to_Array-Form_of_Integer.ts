function addToArrayForm(num: number[], k: number): number[] {
  const kStr = k.toString();
  let numInd = num.length - 1;
  let kInd = kStr.length - 1;
  let carry = 0;
  const ans: number[] = new Array(Math.max(numInd + 1, kInd + 1));
  while (numInd >= 0 || kInd >= 0) {
    const numI = numInd >= 0 ? num[numInd] : 0;
    const kI = kInd >= 0 ? parseInt(kStr[kInd]) : 0;
    ans[Math.max(numInd, kInd)] = (numI + kI + carry) % 10;
    carry = numI + kI + carry >= 10 ? 1 : 0;
    numInd--;
    kInd--;
  }
  if (carry === 1) {
    ans.unshift(1);
  }
  return ans;
}

function addToArrayFormIntOverflow(num: number[], k: number): number[] {
  /*
    Input: num = [1,2,0,0], k = 34
    Output: [1,2,3,4]
    Explanation: 1200 + 34 = 1234
     */
  const result = (parseInt(num.join("")) + k).toString();
  const resultArr: number[] = [];
  for (let i = 0; i < result.length; i++) {
    resultArr.push(parseInt(result[i]));
  }
  return resultArr;
}
export { addToArrayForm };
