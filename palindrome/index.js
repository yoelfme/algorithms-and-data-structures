const palindrome1 = (str) => {
  return str === str.split('').reverse().join('')
}

module.exports = (str) => {
  return str.split('')
            .every((character, i) => {
              return character === str[str.length - i - 1]
            })
}
