type F = (...p: any[]) => any;

function debounce(fn: F, t: number): F {
  let timer: null | ReturnType<typeof setTimeout> = null;
  return function (...args) {
    if (timer !== null) clearTimeout(timer);
    timer = setTimeout(() => fn(...args), t);
  };
}

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */
