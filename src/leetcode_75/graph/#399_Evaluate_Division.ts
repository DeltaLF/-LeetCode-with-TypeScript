function calcEquation(
  equations: string[][],
  values: number[],
  queries: string[][]
): number[] {
  /*
    Input: equations = [["a","b"],["b","c"],["bc","cd"]], values = [1.5,2.5,5.0], queries = [["a","c"],["c","b"],["bc","cd"],["cd","bc"]]
    Output: [3.75000,0.40000,5.00000,0.20000]
    graph:{
        a:{b:1.5, }
        b:{a:1/1.5, c:2.5}
        c:{b:1/2.5}
    }
    */
  function dft(str1: string, str2: string, visited: Set<string>): number {
    visited.add(str1);
    if (!graph[str1]) return -1;
    if (str1 === str2) return 1;
    let res = -1;
    for (const key of Object.keys(graph[str1])) {
      if (key === str2) return graph[str1][str2];
      if (!visited.has(key)) {
        const val = dft(key, str2, visited);
        if (val !== -1) {
          res = graph[str1][key] * val;
          break;
        }
      }
    }
    return res;
  }

  const graph: { [key: string]: { [key: string]: number } } = {};
  for (let i = 0; i < equations.length; i++) {
    const str1 = equations[i][0];
    const str2 = equations[i][1];
    if (!graph[equations[i][0]]) graph[str1] = {};
    if (!graph[equations[i][1]]) graph[str2] = {};
    graph[str1][str2] = values[i];
    graph[str2][str1] = 1 / values[i];
  }

  const ans: number[] = [];
  for (const [str1, str2] of queries) {
    ans.push(dft(str1, str2, new Set<string>()));
  }
  return ans;
}

function calcEquationFail(
  equations: string[][],
  values: number[],
  queries: string[][]
): number[] {
  /*
    Input: equations = [["a","b"],["b","c"]], values = [2.0,3.0], queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]
    Output: [6.00000,0.50000,-1.00000,1.00000,-1.00000]
    Explanation: 
    Given: a / b = 2.0, b / c = 3.0
    queries are: a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ?
    return: [6.0, 0.5, -1.0, 1.0, -1.0 ]
    Input: equations = [["a","b"],["b","c"],["bc","cd"]], values = [1.5,2.5,5.0], queries = [["a","c"],["c","b"],["bc","cd"],["cd","bc"]]
    Output: [3.75000,0.40000,5.00000,0.20000]
    Input: equations = [["a","b"]], values = [0.5], queries = [["a","b"],["b","a"],["a","c"],["x","y"]]
    Output: [0.50000,2.00000,-1.00000,-1.00000]

    equation.length <= 20
    brute force all the pissibility 
    [a,b],[b,c]
    ij=0
    i=0
    a_a
    a_b
    a_c
    i=1
    b_a
    b_b
    b_c
    i=2
    i=3
    (this might be missed) 
    c_a:(mark: lack of c/X, X/a ) 
    c_b

    set:(a,b,c,d,e) n^2 possibility
    [a,b],[b,c],[c,d],[d,e]
    a_a a_b a_c? a_d? a_e?
    b_a b_b b_c b_d? b_e?

    a_c?
    a/b * b/c
    {
        a:{
            b:val
        },
        b:{
            a:val,
            c:val
        }
        c:{
            b:val,
            d:val,
        }
        d:{
            c:val
            e:val
        }
        e:{
            d:val
        }
    }


    from the inital condtions we can write
       a   b   c   d   e  Numerator
    a  1  b/a  I  II
    b a/b  1  c/b 
    c  I  b/c  1  d/c  
    d  II     c/d  1  e/d
    e             d/e  1
    denominator
    to find c/a => c/b*b/a
    I means we can get from inferring
    d/a => d/c c/a
    e/a => e/d d/a 

    conclusion:
    ans2d[i][j] = ans2d[i][x] * ans2d[x][j]

     */

  const ans: number[] = [];
  const varMap = new Map<string, number>();
  const ans2D: number[][] = [];
  let ind = 0;
  // map string to index
  for (const [var1, var2] of equations) {
    if (!varMap.has(var1)) {
      varMap.set(var1, ind); // str to ind
      ind++;
    }
    if (!varMap.has(var2)) {
      varMap.set(var2, ind);
      ind++;
    }
  }
  const N = varMap.size;
  for (let i = 0; i < N; i++) {
    ans2D[i] = [];
    ans2D[i][i] = 1;
  }
  // fill up the inital condition
  for (let i = 0; i < equations.length; i++) {
    const val = values[i];
    const ind1 = varMap.get(equations[i][0])!;
    const ind2 = varMap.get(equations[i][1])!;
    ans2D[ind1][ind2] = val;
    ans2D[ind2][ind1] = 1 / val;
  }
  // ans2d[i][j] = ans2d[i][x] * ans2d[x][j]
  // O(n^3)
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (ans2D[i][j] !== undefined) continue;
      for (let x = 0; x < N; x++) {
        /*
        this approach might miss some combination because there is dependency issuse 
        */
        if (ans2D[i][x] !== undefined && ans2D[x][j] !== undefined) {
          ans2D[i][j] = ans2D[i][x] * ans2D[x][j];
          break;
        }
      }
    }
  }
  for (const [numerator, denominator] of queries) {
    if (!varMap.has(numerator) || !varMap.has(denominator)) {
      ans.push(-1);
      continue;
    }
    const ind1 = varMap.get(numerator)!;
    const ind2 = varMap.get(denominator)!;
    ans.push(ans2D[ind1][ind2] === undefined ? -1 : ans2D[ind1][ind2]);
  }

  return ans;
}

export { calcEquation };
