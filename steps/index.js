const steps1 = (steps) => {
  for (let i = 1; i <= steps; i++) {
    const line = Array(i).fill('#').concat(Array(steps-i).fill(' ')).join('')
    console.log(line)
  }
}

const steps2 = (steps) => {
  for (let row = 0; row < steps; row++) {
    let stair = ''

    for (let column = 0; column < steps; column++) {
      stair += (column <= row) ? '#': ' '
    }

    console.log(stair)
  }
}

module.exports = function steps(n, row = 0, stair = '') {
  if (n === row) {
    return
  }

  if (n === stair.length) {
    console.log(stair)
    return steps(n, row + 1)
  }

  const add = (stair.length <= row) ? '#' : ' '
  return steps(n, row, stair + add)
}
