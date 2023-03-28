function mincostTickets(days: number[], costs: number[]): number {
  const memoizedObj: number[] = [];

  function buyTicket(i = 0, ticketExpireDay = -1): number {
    if (i >= days.length) return 0;
    if (days[i] <= ticketExpireDay) return buyTicket(i + 1, ticketExpireDay); // ticket hasn't expried
    if (memoizedObj[i] !== undefined) return memoizedObj[i];
    // buy 1 day pass
    const buyOne = costs[0] + buyTicket(i + 1, -1);
    // buy 7
    const buySeven = costs[1] + buyTicket(i + 1, days[i] + 6);
    // buy 30
    const buyMon = costs[2] + buyTicket(i + 1, days[i] + 29);
    return (memoizedObj[i] = Math.min(buyOne, buySeven, buyMon));
  }
  return buyTicket();
}

function mincostTicketsNoMemo(days: number[], costs: number[]): number {
  /*
    Input: days = [1,4,6,7,8,20], costs = [2,7,15]
    Output: 11
    1 4 6 7 8 20
    _______
      7  + 2 + 2
    Input: days = [1,2,3,4,5,6,7,8,9,10,30,31], costs = [2,7,15]
    Output: 17
    1~10 30 31
    _______
    15  +    2
    
    1 15 30
i=0  buyOne: c0 
i=1  buyOne: c0+c0
i=2  buyOne: c0+c0+c0 v
     buySeven: c0+c0+c1
     buyMon: c0+c0+c2


    dp:
    start from days[0]
    Is it really a DP?
    if we got optimized half year[200,201,202,203,360]
    can we simply use the result?
    Not necessary!
    optimzed result of half year might be buy 7 day pass at 200
    but it can also be start from 199


     */

  function buyTicket(i = 0, ticketExpireDay = -1): number {
    if (i >= days.length) return 0;
    if (days[i] <= ticketExpireDay) return buyTicket(i + 1, ticketExpireDay); // ticket hasn't expried
    // buy 1 day pass
    const buyOne = costs[0] + buyTicket(i + 1, -1);
    // buy 7
    const buySeven = costs[1] + buyTicket(i + 1, days[i] + 6);
    // buy 30
    const buyMon = costs[2] + buyTicket(i + 1, days[i] + 29);

    return Math.min(buyOne, buySeven, buyMon);
  }
  return buyTicket();
}

export { mincostTickets };
