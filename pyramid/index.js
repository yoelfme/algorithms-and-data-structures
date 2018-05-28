module.exports = (level) => {
  const columns = (level * 2) - 1
  const delta = Math.floor(columns / 2)

  for (let row = 0; row < level; row++) {
    const max = delta + row
    const min = delta - row
    let stair = ''

    for (let column = 0; column < columns; column++) {
      stair += (column >= min && column <= max) ? '#' : ' '
    }
    console.log(stair)
  }
}
