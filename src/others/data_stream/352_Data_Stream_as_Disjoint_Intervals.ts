class SummaryRanges {
  public stack: number[] = [];
  constructor() {}

  addNum(value: number): void {
    for (let i = 0; i < this.stack.length; i++) {
      if (value === this.stack[i]) return;
      if (value < this.stack[i]) {
        this.stack.splice(i, 0, value);
        return;
      }
    }
    this.stack.push(value);
  }

  getIntervals(): number[][] {
    const result: number[][] = [];
    if (this.stack.length === 0) return [];
    result.push([this.stack[0], this.stack[0]]);
    for (let value of this.stack) {
      if (value <= result.at(-1)![1] + 1) {
        result.at(-1)![1] = value;
      } else {
        result.push([value, value]);
      }
    }
    return result;
  }
}

/**
 * Your SummaryRanges object will be instantiated and called as such:
 * var obj = new SummaryRanges()
 * obj.addNum(value)
 * var param_2 = obj.getIntervals()
 */

export { SummaryRanges };
