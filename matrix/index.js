module.exports = (n) => {
  const matrix = []
  const elements = n * n
  let startColumn = 0
  let endColumn = n - 1
  let startRow = 0
  let endRow = n - 1
  let row = 0
  let counter = 1

  for (let i = 0; i < n; i++) {
    matrix[i] = []
  }

  while (startColumn <= endColumn && startRow <= endRow) {
    for (let i = startColumn; i <= endColumn; i++) {
      matrix[startRow][i] = counter++
    }

    startRow++


    for (let i = startRow; i <= endRow; i++) {
      matrix[i][endColumn] = counter++
    }

    endColumn--

    for (let i = endColumn; i >= startColumn; i--) {
      matrix[endRow][i] = counter++
    }

    endRow--

    for (let i = endRow; i >= startRow; i--) {
      matrix[i][startColumn] = counter++
    }

    startColumn++
  }

  return matrix
 }
