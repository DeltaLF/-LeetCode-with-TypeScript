function ways(pizza: string[], k: number): number {
  /*
    Input: pizza = ["A..","AAA","..."], k = 3
    Output: 3 
    A..
    AAA
    ...
    Input: pizza = ["A..","AA.","..."], k = 3
    Output: 1
    A..
    AA.
    ...
    Input: pizza = ["A..","A..","..."], k = 1
    Output: 1
     | |
    x x x_
    x x x_
    x x x
    for length n:
    there are at most (n-1)^2 cut
    at most n^2 pieces

    sholud use recursive
     */
  /*
row,col represent the pizza left
for row=1 col=0 in a 3x3 pizza
it means the first row of pizza is cut off
xxx
ooo
ooo
cutLeft => how much cut needs to be done

define cut row=n means cut between n, n+1
for n=3 one can only cut 0,1

how do I know is a cut is valid or not?

*/

  function isApple(
    startRow: number,
    startCol: number,
    endRow: number,
    endCol: number
  ): boolean {
    if (
      isAppleMemo[`${startRow}_${startCol}_${endRow}_${endCol}`] !== undefined
    )
      return isAppleMemo[`${startRow}_${startCol}_${endRow}_${endCol}`];
    for (let r = startRow; r < endRow; r++) {
      for (let c = startCol; c < endCol; c++) {
        if (pizza[r][c] === "A") {
          return (isAppleMemo[`${startRow}_${startCol}_${endRow}_${endCol}`] =
            true);
        }
      }
    }
    return (isAppleMemo[`${startRow}_${startCol}_${endRow}_${endCol}`] = false);
  }
  const height = pizza.length; // total rows
  const width = pizza[0].length; // total cols
  const isAppleMemo: Record<string, boolean> = {};
  const cutPizzaMemo: Record<string, number> = {};

  function cutPizza(row = 0, col = 0, cutLeft = k - 1): number {
    let ways = 0;
    if (cutPizzaMemo[`${row}_${col}_${cutLeft}`] !== undefined)
      return cutPizzaMemo[`${row}_${col}_${cutLeft}`];
    if (cutLeft === 0) {
      if (isApple(row, col, height, width)) {
        return 1;
      }
    }
    // try cut horizontally
    for (let i = row; i < height - 1; i++) {
      if (isApple(row, col, i + 1, width)) {
        ways += cutPizza(i + 1, col, cutLeft - 1);
      }
    }

    // try cut vertically
    for (let j = col; j < width - 1; j++) {
      if (isApple(row, col, height, j + 1)) {
        ways += cutPizza(row, j + 1, cutLeft - 1);
      }
    }
    return (cutPizzaMemo[`${row}_${col}_${cutLeft}`] = ways);
  }
  return cutPizza() % (10 ** 9 + 7);
}

export { ways };
