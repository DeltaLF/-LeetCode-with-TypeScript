function checkStraightLine(coordinates: number[][]): boolean {
  /*
      Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
       */
  const slope =
    (coordinates[0][1] - coordinates[1][1]) /
    (coordinates[0][0] - coordinates[1][0]);
  for (let i = 2; i < coordinates.length; i++) {
    const slopeI =
      (coordinates[0][1] - coordinates[i][1]) /
      (coordinates[0][0] - coordinates[i][0]);
    if (!Number.isFinite(slope) && !Number.isFinite(slopeI)) continue;
    if (slope !== slopeI) return false;
  }
  return true;
}

export { checkStraightLine };
