module.exports = (steps) => {
  for (let i = 1; i <= steps; i++) {
    const line = Array(i).fill('#').concat(Array(steps-i).fill(' ')).join('')
    console.log(line)
  }
}
