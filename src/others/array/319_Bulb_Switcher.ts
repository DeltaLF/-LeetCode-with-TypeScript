function bulbSwitch(n: number): number {
  return Math.floor(Math.sqrt(n));
}

function bulbSwitchNotOpt(n: number): number {
  if (n === 0) return 0;
  if (n === 1) return 1;
  let res = 1;
  for (let i = 2; i <= n; i++) {
    if (Math.floor(Math.sqrt(i)) === Math.sqrt(i)) {
      res++;
    }
  }
  return res;
}

export { bulbSwitch };
