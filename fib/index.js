const fibonacci = (n) => {
  if (n < 2) return n

  return (n - 1) + (n - 2)
}

module.exports = (n) => {
  const serie = [0, 1]

  for (let i = 2; i <= n; i++) {
    const a = serie[i - 1]
    const b = serie[i - 2]

    serie[i] = a + b
  }

  return serie[n]
}
