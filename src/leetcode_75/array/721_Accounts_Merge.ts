function accountsMerge(accounts: string[][]): string[][] {
  /*
    Input: accounts = [
        ["John","johnsmith@mail.com","john_newyork@mail.com"],
        ["John","johnsmith@mail.com","john00@mail.com"],
        ["Mary","mary@mail.com"],
        ["John","johnnybravo@mail.com"]]
    Output: [
        ["John","john00@mail.com","john_newyork@mail.com","johnsmith@mail.com"],
        ["Mary","mary@mail.com"],
        ["John","johnnybravo@mail.com"]]

    1. different names never make a group
    2. make group based on a. same name b. same email

    iterate through and use email as key name value is UnionFind
    */

  const unionFind: number[] = [];
  const unionSize: number[] = [];
  for (let i = 0; i < accounts.length; i++) {
    unionFind[i] = i;
    unionSize[i] = 1;
  }
  function find(i: number): number {
    if (unionFind[i] === i) return i;
    return (unionFind[i] = find(unionFind[i]));
  }
  function union(a: number, b: number) {
    const aRoot = find(a);
    const bRoot = find(b);
    if (aRoot === bRoot) return;
    if (unionSize[bRoot] > unionSize[aRoot]) {
      unionFind[aRoot] = bRoot;
      unionSize[bRoot] += unionSize[aRoot];
    } else {
      unionFind[bRoot] = aRoot;
      unionSize[aRoot] += unionSize[bRoot];
    }
  }
  // number corresponding unionFind
  const accountHashMap: { [key: string]: number } = {};
  for (let i = 0; i < accounts.length; i++) {
    const account = accounts[i];
    // iterate through emails
    for (let j = 1; j < account.length; j++) {
      const email = account[j];
      if (accountHashMap[email] === undefined) {
        accountHashMap[email] = i;
      } else {
        // duplicated email found union the found email group and current email group
        union(accountHashMap[email], i);
      }
    }
  }

  const res: string[][] = []; // key is the group index value: Name + emails
  for (let email in accountHashMap) {
    const rootGroupIndex = find(accountHashMap[email]);
    if (res[rootGroupIndex] === undefined) {
      res[rootGroupIndex] = [accounts[rootGroupIndex][0], email];
    } else {
      res[rootGroupIndex].push(email);
    }
  }
  const ans: string[][] = [];
  for (let i = 0; i < res.length; i++) {
    if (!res[i]) continue;
    ans.push([res[i][0], ...res[i].splice(1).sort()]);
  }
  return ans;
}

export { accountsMerge };
