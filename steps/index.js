const steps1 = (steps) => {
  for (let i = 1; i <= steps; i++) {
    const line = Array(i).fill('#').concat(Array(steps-i).fill(' ')).join('')
    console.log(line)
  }
}

module.exports = (steps) => {
  for (let row = 0; row < steps; row++) {
    let stair = ''

    for (let column = 0; column < steps; column++) {
      stair += (column <= row) ? '#': ' '
    }

    console.log(stair)
  }
}
