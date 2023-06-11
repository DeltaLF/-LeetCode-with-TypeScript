class SnapshotArrayTLE {
  private map = new Map<string, number>();
  private sId = 0;
  private len: number;
  constructor(length: number) {
    this.len = length;
  }

  set(index: number, val: number): void {
    if (index >= this.len) return;
    this.map.set(`${this.sId}_${index}`, val);
  }

  snap(): number {
    return this.sId++;
  }

  get(index: number, snap_id: number): number {
    let res: number | undefined = 0;
    while (snap_id >= 0) {
      res = this.map.get(`${snap_id}_${index}`);
      if (res !== undefined) return res;
      snap_id--;
    }
    return 0;
  }
}
[
  [0, 4],
  [2, 2],
];
class SnapshotArray {
  private arr: number[][][] = [];
  private sId = 0;
  constructor(length: number) {
    for (let i = 0; i < length; i++) {
      this.arr[i] = [];
    }
  }

  set(index: number, val: number): void {
    const indArr = this.arr[index];
    if (indArr.length > 0 && indArr[indArr.length - 1][0] === this.sId) {
      // udpate latest snapshot
      indArr[indArr.length - 1][1] = val;
    } else {
      indArr.push([this.sId, val]);
    }
  }

  snap(): number {
    return this.sId++;
  }

  get(index: number, snap_id: number): number {
    const indArr = this.arr[index];
    if (indArr.length === 0) return 0;
    let l = 0;
    let r = indArr.length - 1;
    let m = Math.floor((l + r) / 2);
    while (l < r) {
      if (snap_id === indArr[m][0]) {
        return indArr[m][1];
      } else if (snap_id > indArr[m][0]) {
        l = m + 1;
      } else {
        r = m - 1;
      }
      m = Math.floor(l);
    }
    if (indArr[m][0] <= snap_id) return indArr[m][1];
    if (indArr[m - 1] !== undefined && indArr[m - 1][0] <= snap_id)
      return indArr[m - 1][1];
    return 0;
  }
}

/**
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */

export { SnapshotArray };
