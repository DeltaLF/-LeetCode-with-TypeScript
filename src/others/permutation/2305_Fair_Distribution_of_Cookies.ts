function distributeCookies(cookies: number[], k: number): number {
  /*
      Input: cookies = [8,15,10,20,8], k = 2
      Output: 31
  
      seems to be a permutation problem => brute force list all combinations 
      complexity: n!/n
      
      
       */

  function distribute(i = 0, kids: number[] = new Array(k).fill(0)): number {
    if (i >= cookies.length) return Math.max(...kids);

    let min = Infinity;
    // distribute cookie
    for (let kid = 0; kid < Math.min(i + 1, kids.length); kid++) {
      kids[kid] += cookies[i];
      min = Math.min(distribute(i + 1, kids), min);
      kids[kid] -= cookies[i];
    }
    return min;
  }
  return distribute();
}
function distributeCookiesMemo(cookies: number[], k: number): number {
  /*
  memo doesn't make performance better
    Input: cookies = [8,15,10,20,8], k = 2
    Output: 31

    seems to be a permutation problem => brute force list all combinations 
    complexity: n!/n
    
    
     */

  const memo = new Map<string, number>();
  function distribute(i = 0, kids: number[] = new Array(k).fill(0)): number {
    if (i >= cookies.length) return Math.max(...kids);
    const key = JSON.stringify(kids);
    if (memo.get(key)) return memo.get(key)!;

    let min = Infinity;
    // distribute cookie
    for (let kid = 0; kid < kids.length; kid++) {
      kids[kid] += cookies[i];
      min = Math.min(distribute(i + 1, kids), min);
      kids[kid] -= cookies[i];
    }
    memo.set(key, min);
    return min;
  }
  return distribute();
}

export { distributeCookies };
