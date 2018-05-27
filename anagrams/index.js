const standarizeWord = (string) => {
  return string
    .replace(/\W/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('')
}

const anagram1 = (string1, string2) => {
  return standarizeWord(string1) === standarizeWord(string2)
}

const buildCharMap = (str) => {
  const charMap  = {}

  for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1
  }

  return charMap
}


module.exports = (string1, string2) => {
  const charMap1 = buildCharMap(string1)
  const charMap2 = buildCharMap(string2)

  if (Object.keys(charMap1).length !== Object.keys(charMap2).length) {
    return false
  }

  for (let char in charMap1) {
    if (charMap1[char] !== charMap2[char]) {
      return false
    }
  }

  return true
}
