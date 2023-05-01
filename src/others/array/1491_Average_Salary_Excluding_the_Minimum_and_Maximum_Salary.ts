function average(salary: number[]): number {
  /*
    Input: salary = [4000,3000,1000,2000]
    Output: 2500.00000
     */
  const max = Math.max(...salary);
  const min = Math.min(...salary);
  return salary.reduce((pre, cur) => {
    if (cur === max || cur === min) {
      return pre;
    } else {
      return pre + cur / (salary.length - 2);
    }
  }, 0);
}

export { average };
