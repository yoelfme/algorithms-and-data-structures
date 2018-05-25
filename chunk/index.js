module.exports = (array, size) => {
  const elements = Math.floor(array.length / size)
  const finalArray = []

  for (let i = 0; i < elements; i++) {
    finalArray.push(array.splice(0, size))
  }

  if (array.length !== 0) {
    finalArray.push(array)
  }

  return finalArray
}
