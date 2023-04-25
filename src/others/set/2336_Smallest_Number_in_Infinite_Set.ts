// since only 1000 time is called => use stack for simplicity
class SmallestInfiniteSet {
  public numNotExist: number[] = [];
  public minNum = 1;
  constructor() {}

  popSmallest(): number {
    // smallest number in between numNotExist
    let res = 0;
    if (
      this.numNotExist.length < this.numNotExist[this.numNotExist.length - 1]
    ) {
      let count = 1;
      for (let i = 0; i < this.numNotExist.length; i++) {
        if (count !== this.numNotExist[i]) {
          res = count;
          this.numNotExist.splice(i, 0, res);
          break;
        }
        count++;
      }
    } else {
      // samllest number is outside numNotExist
      res = this.numNotExist.length + 1;
      this.numNotExist.push(res);
    }
    return res;
  }

  addBack(num: number): void {
    const ind = this.numNotExist.indexOf(num);
    if (ind > -1) {
      this.numNotExist.splice(ind, 1);
    }
  }
}

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */

export { SmallestInfiniteSet };
