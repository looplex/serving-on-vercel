export function sleeper (s) {
  return function (x) {
    return new Promise(resolve => setTimeout(() => resolve(x), s * 1000))
  }
}
