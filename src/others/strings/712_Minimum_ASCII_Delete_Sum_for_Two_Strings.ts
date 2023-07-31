function minimumDeleteSum(s1: string, s2: string): number {
  /*
    Input: s1 = "sea", s2 = "eat"
    Output: 231
    Input: s1 = "delete", s2 = "leet"
    Output: 403
     */

  const memo = new Map<string, number>();

  function dp(ind1 = 0, ind2 = 0): number {
    if (ind1 >= s1.length && ind2 >= s2.length) return 0;
    if (ind1 >= s1.length) return dp(ind1, ind2 + 1) + s2.charCodeAt(ind2);
    if (ind2 >= s2.length) return dp(ind1 + 1, ind2) + s1.charCodeAt(ind1);
    if (s1[ind1] === s2[ind2]) return dp(ind1 + 1, ind2 + 1);
    const key = `${ind1}_${ind2}`;
    if (memo.has(key)) return memo.get(key)!;
    const deleteI = dp(ind1 + 1, ind2) + s1.charCodeAt(ind1);
    const deleteII = dp(ind1, ind2 + 1) + s2.charCodeAt(ind2);

    const min = Math.min(deleteI, deleteII);
    memo.set(key, min);
    return min;
  }
  return dp();
}

export { minimumDeleteSum };
