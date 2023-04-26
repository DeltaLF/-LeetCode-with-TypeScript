function addDigits(num: number): number {
  if (num < 10) return num;
  let newNum = 0;
  for (let n of num.toString()) {
    newNum += Number(n);
  }
  return addDigits(newNum);
}
