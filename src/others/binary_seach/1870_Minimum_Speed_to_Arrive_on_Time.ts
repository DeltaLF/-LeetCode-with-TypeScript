function minSpeedOnTime(dist: number[], hour: number): number {
  /*
      Input: dist = [1,3,2], hour = 6
      Output: 1
      Input: dist = [1,3,2], hour = 2.7
      Output: 3
      Input: dist = [1,3,2], hour = 1.9
      Output: -1
       */
  if (dist.length > hour + 1) return -1;
  const maxSpeed = Math.max(
    ...dist,
    hour - Math.floor(hour) === 0
      ? 0
      : dist[dist.length - 1] / (hour - Math.floor(hour))
  );

  let r = maxSpeed;
  let l = 0;
  let m = Math.floor((r + l) / 2);
  function isSpeendInTime(speed: number): boolean {
    let totalTime = dist.reduce((prev, next) => {
      return prev + Math.ceil(next / speed);
    }, 0);
    totalTime =
      totalTime -
      Math.ceil(dist[dist.length - 1] / speed) +
      dist[dist.length - 1] / speed;
    return totalTime <= hour;
  }

  while (r > l) {
    if (isSpeendInTime(m)) {
      r = m;
    } else {
      l = m + 1;
    }
    m = Math.floor((l + r) / 2);
  }
  m = isSpeendInTime(m) ? m : m + 1;
  return isSpeendInTime(m) ? m : -1;
}

export { minSpeedOnTime };
