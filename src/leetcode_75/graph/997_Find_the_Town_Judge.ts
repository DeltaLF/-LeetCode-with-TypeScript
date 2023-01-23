function findJudge(n: number, trust: number[][]): number {
  const directMap: number[][] = [];
  // directMap[1] = [indegree, outdegree] => [trusted, trust other]
  // for just => trusted - trust = n - 1 => indegree - outdegree === n-1
  for (let i = 0; i <= n; i++) {
    directMap[i] = [0, 0];
  }
  for (let [truster, trusted] of trust) {
    directMap[truster][1]++;
    directMap[trusted][0]++;
  }
  for (let i = 1; i <= n; i++) {
    if (directMap[i][0] - directMap[i][1] === n - 1) {
      return i;
    }
  }
  return -1;
}

function findJudgeBruteForce(n: number, trust: number[][]): number {
  /*
      Input: n = 3, trust = [[1,3],[2,3]]
      1 trust 3
      2 trust 3
      3 trust no
      [
          [],
          [3]
          [3]
          ,[]
      ]
      if judge exisits:
      it is pointed by all other nodes
      it points to nobody
      
      to do: recover the graph
      */
  const graph: number[][] = [];
  for (let i = 0; i <= n; i++) {
    graph[i] = [];
  }
  for (let [truster, trusted] of trust) {
    graph[truster].push(trusted);
  }
  let candidateJude: number = -1;
  for (let people = 1; people <= n; people++) {
    if (graph[people].length === 0) {
      // mutiple people have trust issue
      if (candidateJude > 0) return -1;
      candidateJude = people;
    }
  }
  // make sure jude is trusted by all people
  let trustedCount = 0;
  for (let [truster, trusted] of trust) {
    if (trusted === candidateJude) {
      trustedCount++;
    }
  }
  return trustedCount === n - 1 ? candidateJude : -1;
}

export { findJudge };
