const capitalize1 = (string) => {
  return string.split(' ')
    .map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
    .join(' ')
}

const capitalize2 = (string) => {
  const words = []

  for (let word of string.split(' ')) {
    words.push(word[0].toUpperCase() + word.slice(1))
  }

  return words.join(' ')
}

module.exports = (string) => {
  let result = string[0].toUpperCase()

  for (let i = 1; i < string.length; i++) {
    if (string[i - 1] === ' ') {
      result+= string[i].toUpperCase()
    } else {
      result+= string[i]
    }
  }

  return result
}
