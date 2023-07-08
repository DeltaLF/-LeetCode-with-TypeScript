function putMarbles(weights: number[], k: number): number {
  const pairs: number[] = [];
  const N = weights.length;
  for (let i = 0; i < N - 1; i++) {
    pairs[i] = weights[i] + weights[i + 1];
  }
  pairs.sort((a, b) => a - b);
  let max = weights[0] + weights[N - 1];
  let min = weights[0] + weights[N - 1];
  for (let i = 0; i < k - 1; i++) {
    max += pairs[N - 2 - i];
    min += pairs[i];
  }

  return max - min;
}

export { putMarbles };
