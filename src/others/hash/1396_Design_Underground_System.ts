/*
L->W 12
L->W 10
P->C 14
L->W 14

45 L  3
32 P  8 
27 L  10 
45 W  15 out 
27 W  20 out
32 C  22 out
10 L  24
10 W  38 out

?? will they be
A->B t1
B->C t2
ask A->C t1+t2?
----------
L->P 5
L->P 6
L->P 9

10 L 3
10 P 8 out
5  L 10
5  P 16 out
2  L 21
2  P 30 out

*/
class UndergroundSystem {
  private customers: Record<number, (number | string)[]> = {};
  private map: Record<string, number[]> = {}; // [time total,custom count]
  constructor() {}

  checkIn(id: number, stationName: string, t: number): void {
    this.customers[id] = [t, stationName];
  }

  checkOut(id: number, stationName: string, t: number): void {
    const timeDiff = t - (this.customers[id][0] as number);
    const key = `${this.customers[id][1]}_${stationName}`;
    if (!this.map[key]) this.map[key] = [0, 0];
    this.map[key][0] += timeDiff;
    this.map[key][1] += 1;
  }

  getAverageTime(startStation: string, endStation: string): number {
    const key = `${startStation}_${endStation}`;
    return this.map[key][0] / this.map[key][1];
  }
}

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */
