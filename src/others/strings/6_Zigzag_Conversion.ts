function convert(s: string, numRows: number): string {
  if (numRows === 1) return s;
  const strArr: string[][] = [];
  for (let i = 0; i < numRows; i++) {
    strArr[i] = [];
  }
  let direction = 1;
  let row = 0;
  for (let i = 0; i < s.length; i++) {
    strArr[row].push(s[i]);
    if (row + 1 === numRows) {
      direction = -1;
    }
    if (row === 0) {
      direction = 1;
    }
    row += direction;
  }
  let ans = "";
  for (row = 0; row < numRows; row++) {
    ans += strArr[row].join("");
  }
  return ans;
}
function convertVerbose(s: string, numRows: number): string {
  if (numRows === 1) return s;
  const strArr: string[][] = [];
  for (let i = 0; i < numRows; i++) {
    strArr[i] = [];
  }
  let isVertical = true;
  let row = 0;
  for (let i = 0; i < s.length; i++) {
    strArr[row].push(s[i]);
    if (isVertical) {
      if (row + 1 < numRows) {
        row++;
      } else {
        row--;
        isVertical = false;
      }
    } else {
      if (row - 1 >= 0) {
        row--;
      } else {
        row++;
        isVertical = true;
      }
    }
  }
  let ans = "";
  row = 0;
  let col = 0;
  for (let i = 0; i < s.length; i++) {
    ans += strArr[row][col];
    if (strArr[row].length > col + 1) {
      col++;
    } else {
      col = 0;
      row++;
    }
  }
  return ans;
}

function convertBF(s: string, numRows: number): string {
  /*
  vertical: numRows
  slope: 0 for one, 1 for one, others: numRows - 2
one:
   aaaa
two:
   a a a a a
   a   a   a
three:
   a   a   a
   a a a a a
   a   a   a
four:
   a    a   a
   a  a a  a
   a a  a a
   a    a 
five:
   a    a
   a   aa
   a  a a
   a a  a
   a    a
*/
  if (numRows === 1) return s;
  const vertical = numRows;
  const slope = numRows === 2 ? 1 : numRows - 2;
  const totalVSpairs = Math.ceil(s.length / (vertical + slope)) * (slope + 1);
  const strArr: string[][] = [];
  for (let row = 0; row < vertical; row++) {
    strArr[row] = Array(totalVSpairs).fill("");
  }
  let row = 0;
  let col = 0;
  let isVertical = true;
  for (let i = 0; i < s.length; i++) {
    strArr[row][col] = s[i];
    if (isVertical) {
      if (strArr[row + 1] !== undefined) {
        // contniue go down vertically
        row++;
      } else {
        // go up as slope
        row--;
        col++;
        isVertical = false;
      }
    } else {
      if (strArr[row - 1] !== undefined) {
        row--;
        col++;
      } else {
        row++;
        isVertical = true;
      }
    }
  }
  // recover
  let answer = "";
  for (let row = 0; row < vertical; row++) {
    for (let col = 0; col < totalVSpairs; col++) {
      answer += strArr[row][col];
    }
  }
  return answer;
  //   const totalVSpairs = Math.floor(s.length / (vertical + slope));
  //   const extraVS = s.length % (vertical + slope);
  //   const extraVertical = extraVS >= vertical ? vertical : extraVS;
  //   const extraSlope = extraVS > vertical ? extraVS - vertical : 0;

  //   for(let row=0; row < numRows; row++){

  //   }
}

export { convert };
