function summaryRanges(nums: number[]): string[] {
  /*
      Input: nums = [0,1,2,4,5,7]
      Output: ["0->2","4->5","7"]
      */
  if (nums.length === 0) return [];
  const resNum: number[][] = [[nums[0]]];
  const res: string[] = [];
  let i = 1;
  while (i < nums.length) {
    const lastArr = resNum[resNum.length - 1];
    if (lastArr[0] + 1 === nums[i] || lastArr[1] + 1 === nums[i]) {
      lastArr[1] = nums[i];
    } else {
      if (i < nums.length) resNum.push([nums[i]]);
    }
    i++;
  }
  for (const [s, e] of resNum) {
    if (e === undefined) {
      res.push(s.toString());
    } else {
      res.push(`${s}->${e}`);
    }
  }
  return res;
}

export { summaryRanges };
