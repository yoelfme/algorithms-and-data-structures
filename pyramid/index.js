const pyramid1 = (level) => {
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

module.exports = function pyramid(levels, row = 0, level = '') {
  if (levels === row)  return;

  const columns = (levels * 2) - 1
  const midpoint = Math.floor(columns / 2)
  const max = midpoint + row
  const min = midpoint - row

  if (columns === level.length) {
    console.log(level)
    return pyramid(levels, row + 1)
  }

  const add = (level.length >= min && level.length <= max) ? '#' : ' '

  return pyramid(levels, row, level + add)
}
