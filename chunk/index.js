const chunk1 = (array, size) => {
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

const chunk2 = (array, size) => {
  const chunked = []

  for (let element of array) {
    const last = chunked[chunked.length - 1]

    if (!last || last.length === size) {
      chunked.push([element])
    } else {
      last.push(element)
    }
  }

  return chunked
}

module.exports = (array, size) => {
  const chunked = []
  let index = 0

  while (index < array.length) {
    chunked.push(array.slice(index, index + size))

    index += size
  }

  return chunked
}
