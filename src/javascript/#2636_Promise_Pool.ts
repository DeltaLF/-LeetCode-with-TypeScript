type F = () => Promise<any>;

function promisePool(functions: F[], n: number): Promise<any> {
  return new Promise<void>((resolve) => {
    if (functions.length === 0) resolve();
    let funcInd = 0;
    let finishedCount = 0;
    async function next() {
      if (funcInd >= functions.length) return;
      funcInd++;
      await functions[funcInd - 1]();
      finishedCount++;
      // how do I know it's the last one?
      if (finishedCount === functions.length) {
        resolve();
      }
      next();
    }

    for (let i = 0; i < Math.min(functions.length, n); i++) {
      next();
    }
  });
}

export { promisePool };
