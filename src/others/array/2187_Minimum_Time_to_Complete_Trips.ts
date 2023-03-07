function minimumTime(time: number[], totalTrips: number): number {
  // not suppose simply use minTime as ratio
  /*
      Input: time = [1,2,3], totalTrips = 5
      Output: 3
  
      totalTrips <= 10^7
      brute force:
      iterate thorough time
      minus totalTrips whenver a trip is completed
      but this will cause TLE
      if there are 10^5 n buses and every trip costs 10^7 m time to complete
      we need O(n*m)
      check n bus every second until m time
  
      use min(time) to find the lower and upper bound 
       min(time) * totalTrips / time   < time cost < min(time) * totalTrips
  
       */
  const minTime = Math.min(...time);
  const n = time.length;
  const minTotalTime = Math.ceil(totalTrips / n) * minTime; // assume all buses only take minTime to travel
  const maxTotalTime = totalTrips * minTime; // assume all buses are extreamly expect for minTime bus

  let l = minTotalTime;
  let r = maxTotalTime;
  let m = Math.floor((r + l) / 2);
  function isTripCompleted(t: number): boolean {
    const tripCompleted = time.reduce((prev, curr) => {
      return prev + Math.floor(t / curr);
    }, 0);
    console.log("time:t", t, time, tripCompleted, tripCompleted >= totalTrips);
    return tripCompleted >= totalTrips;
  }
  let minPossibleTime = maxTotalTime;
  while (l <= r) {
    console.log(l, r, m);
    if (isTripCompleted(m)) {
      // m is valid
      minPossibleTime = Math.min(minPossibleTime, m);
      r = m - 1;
    } else {
      // m is not enough to complete all of the trips
      l = m + 1;
    }
    m = Math.floor((r + l) / 2);
  }

  return minPossibleTime;
}

function minimumTimeFailed(time: number[], totalTrips: number): number {
  // not suppose simply use minTime as ratio
  /*
    Input: time = [1,2,3], totalTrips = 5
    Output: 3

    totalTrips <= 10^7
    brute force:
    iterate thorough time
    minus totalTrips whenver a trip is completed
    but this will cause TLE
    if there are 10^5 n buses and every trip costs 10^7 m time to complete
    we need O(n*m)
    check n bus every second until m time

    use min(time) to find the lower and upper bound 
     min(time) * totalTrips / time   < time cost < min(time) * totalTrips

     */
  const minTime = Math.min(...time);
  const n = time.length;
  const minTotalTime = Math.ceil(totalTrips / n) * minTime; // assume all buses only take minTime to travel
  const maxTotalTime = totalTrips * minTime; // assume all buses are extreamly expect for minTime bus

  for (let i = minTotalTime; i <= maxTotalTime; i += minTime) {
    // every loop add unit time: minTime
    const tripCompleted = time.reduce((prev, curr) => {
      return prev + Math.floor(i / curr);
    }, 0);
    if (tripCompleted >= totalTrips) return i;
  }
  return maxTotalTime;
}

export { minimumTime };
