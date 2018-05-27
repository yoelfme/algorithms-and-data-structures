const capitalize1 = (string) => {
  return string.split(' ')
    .map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
    .join(' ')
}

module.exports = (string) => {
  const words = []

  for (let word of string.split(' ')) {
    words.push(word[0].toUpperCase() + word.slice(1))
  }

  return words.join(' ')
}
