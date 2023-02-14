function addBinary(a: string, b: string): string {
  /*
      Input: a = "1010", b = "1011"
      Output: "10101"
       */

  let ans = "";
  let indA = a.length - 1;
  let indB = b.length - 1;
  let isCarray = 0;
  while (indA >= 0 || indB >= 0) {
    const aNum = indA >= 0 ? parseInt(a[indA]) : 0;
    const bNum = indB >= 0 ? parseInt(b[indB]) : 0;
    ans = ((aNum + bNum + isCarray) % 2).toString() + ans;
    isCarray = aNum + bNum + isCarray > 1 ? 1 : 0;
    indA--;
    indB--;
  }
  if (isCarray) {
    ans = "1" + ans;
  }
  return ans;
}

export { addBinary };
