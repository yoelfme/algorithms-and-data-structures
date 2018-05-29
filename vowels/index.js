const vowels1 = (str) => {
  const vowels = str.match(/[aeiou]/gi)

  return vowels && vowels.length || 0
}

module.exports = (str) => {
  let count = 0
  const checker = ['a', 'e', 'i', 'o', 'u']

  for (let char of str.toLowerCase()) {
    if (checker.includes(char)) {
      count++
    }
  }

  return count
}
