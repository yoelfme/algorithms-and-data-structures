const maxchar1 = (str) => {
  const map = str.split('').reduce((map, character) => {
    if (!map.hasOwnProperty(character)) {
      map[character] = 1
    } else {
      map[character] = map[character] + 1
    }

    return map
  }, {})

  let max = null
  Object.keys(map)
    .forEach((key) => {
      const value = map[key]

      if ((max && value > max) || (!max)) {
        max = key
      }
    })

  return max
}

module.exports = (str) => {
  const map = {}
  let max = 0
  let maxChar = ''

  for (let char of str) {
    map[char] = map[char] + 1 || 1
  }

  for (let char in map) {
    if (map[char] > max) {
      max = map[char]
      maxChar = char
    }
  }

  return maxChar
}
