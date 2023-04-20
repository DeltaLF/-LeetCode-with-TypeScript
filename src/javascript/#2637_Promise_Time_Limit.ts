type Fn = (...params: any[]) => Promise<any>;

function timeLimit(fn: Fn, t: number): Fn {
  return async function (...args) {
    const rejFunc = new Promise((_, rej) => {
      setTimeout(() => {
        rej("Time Limit Exceeded");
      }, t);
    });
    return Promise.race([fn(...args), rejFunc]);
  };
}

function timeLimitAccpetedAnser(fn: Fn, t: number): Fn {
  return async function (...args) {
    return new Promise<any>((res, rej) => {
      fn(...args)
        .then((result) => {
          res(result);
        })
        .catch((e) => {
          rej(e);
        });
      setTimeout(() => {
        rej("Time Limit Exceeded");
      }, t);
    });
  };
}

export { timeLimit };
