module.exports = (str) => {
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
