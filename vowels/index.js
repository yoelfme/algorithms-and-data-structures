module.exports = (str) => {
  const vowels = str.toLowerCase().match(/[aeiou]/g)

  return vowels && vowels.length || 0
}
