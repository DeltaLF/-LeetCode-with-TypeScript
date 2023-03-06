function minimumDeviation(nums: number[]): number {
  /*
      Input: nums = [4,1,5,20,3]
      Output: 3
      [1,3,4,5,20]
      candidate standard 1,2,3,6,4,5,10,20
      [2,6,4,10,20] => only one operation left -> divide
      [2,4,6,10,20]

      18

      2 4 6 8 10

      8
      2 4 5 6 8
      6
      2 4 5 6
      4
      2 3 4 5 
      3
       */
  nums = Array.from(
    new Set(nums.map((num) => (num % 2 === 1 ? 2 * num : num)))
  ).sort((a, b) => a - b);
  if (nums.length === 1) return 0;
  let min = nums[nums.length - 1] - nums[0];
  while (nums[nums.length - 1] % 2 === 0) {
    const top = nums.pop()! / 2;
    let i = 0;
    while (i < nums.length) {
      if (nums[i] > top) {
        nums.splice(i, 0, top);
        break;
      }
      i++;
    }
    if (nums.length === i) {
      nums.push(top);
    }
    min = Math.min(min, nums[nums.length - 1] - nums[0]);
  }
  return min;
}

function minimumDeviationFailed(nums: number[]): number {
  /*
    Input: nums = [4,1,5,20,3]
    Output: 3
    [1,3,4,5,20]
    candidate standard 1,2,3,6,4,5,10,20
     */
  let candidate: number[] = [];
  for (let num of nums) {
    if (num % 2 === 1) {
      candidate.push(num);
      candidate.push(num * 2);
    } else {
      while (num > 1 && num % 2 === 0) {
        candidate.push(num);
        num = num / 2;
      }
      if (num === 1) candidate.push(1);
    }
  }
  let min = Infinity;
  candidate = Array.from(new Set(candidate));
  candidate.sort((a, b) => a - b);
  for (let standard of candidate) {
    let localDev = -Infinity; // every standard from candiate has a localDev
    for (let i = 0; i < nums.length; i++) {
      let curNum = nums[i];
      let singleDev = Infinity;
      if (standard === curNum) continue;
      if (standard > curNum) {
        if (standard === 5) {
          console.log(
            "-----------------------",
            standard,
            "cir",
            curNum,
            "singleDev",
            singleDev
          );
        }

        singleDev = Math.min(standard - curNum, singleDev);
        if (curNum % 2 === 1) {
          singleDev = Math.min(standard - curNum * 2, singleDev);
        }
      } else {
        // standard is smaller
        singleDev = Math.min(singleDev, curNum - standard);
        while (curNum % 2 === 0 && curNum / 2 > standard) {
          curNum = curNum / 2;
          singleDev = Math.min(singleDev, curNum - standard);
        }
      }
      if (standard === 5) {
        console.log(
          "standard",
          4,
          "localDev",
          localDev,
          "nums",
          nums[i],
          "curNum",
          curNum
        );
      }
      localDev = Math.max(localDev, singleDev);
    }
    console.log("nums", nums, candidate, standard, "localDev", localDev);
    min = Math.min(min, localDev);
  }
  return min;
}

function minimumDeviationFail(nums: number[]): number {
  /*
    Input: nums = [4,1,5,20,3]
    Output: 3
    [4,2,5,5,3]  5-2

    1 - 2 - 4 - 8 - 16 - 32
    3 - 6 - 12 - 24
    5 - 10 - 20 - 40
    7 - 14 - 28 - 56
    9 - 18 - 36 
    ...

    minimum odd number is not necessary the answer example:
    [49, 50, 25]

    
    simplify the question
    1. transform all nunmber to min odd number
    nope -> since only even number can be multiple by 2 
    2. remove duplicated odd number
    3. try to find the minimum deviation from the remaining numbers

    3, 7, 25
    use 3 as standard  22  [3,7,25]
    use 7 as standard  18  [6,7,25]
    use 25 as standard 1   [24,28,25]
    should we consider 2*3 or 2*7 or 2*25 as standard? probably not?
    */

  console.log("before", nums);
  nums = Array.from(
    new Set(
      nums.map((num) => {
        console.log(num);
        while (num > 1 && num % 2 === 0) {
          num = num / 2;
        }
        console.log(num);
        return num;
      })
    )
  ); // eliminate duplicated
  console.log("after", nums);
  nums.sort((a, b) => {
    return a - b;
  });
  const n = nums.length;
  let min = Infinity;
  for (let i = 0; i < n; i++) {
    // use nums[i] as standard
    const standard = nums[i];
    let localDev = -Infinity;
    for (let j = 0; j < n; j++) {
      let curNum = nums[j];
      if (curNum === standard) continue;
      let singleDev = Infinity;
      while (curNum < standard) {
        singleDev = Math.min(singleDev, standard - curNum);
        curNum *= 2;
      }
      singleDev = Math.min(singleDev, curNum - standard);
      localDev = Math.max(singleDev, localDev);
      console.log(nums, standard, localDev);
    }
    console.log("------ min", min, "localDev", localDev);
    min = Math.min(min, localDev);
  }
  return min;
}

export { minimumDeviation };
