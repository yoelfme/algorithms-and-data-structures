const fib1 = (n) => {
  const serie = [0, 1]

  for (let i = 2; i <= n; i++) {
    const a = serie[i - 1]
    const b = serie[i - 2]

    serie[i] = a + b
  }

  return serie[n]
}

const memo = [0, 1]
const fib2 = (n) => {
  let result = memo[n]

  if (result === undefined) {
    result = fib(n - 1) + fib(n - 2)
    memo[n] = result
  }

  return result
}

const memoize = (fn) => {
  const cache = {}

  return (...args) => {
    if (cache[args]) {
      return cache[args]
    }

    const result = fn.apply(this, args)
    cache[args] = result

    return result
  }
}

const slowFib = (n) => {
  if (n < 2) {
    return n
  }

  return slowFib(n - 1) + slowFib(n - 2)
}

const fib = memoize(slowFib)

module.exports = fib
