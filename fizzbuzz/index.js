module.exports = (n) => {
  [...Array(n)].forEach((i, index) => {
    index++;
    let string = ''

    string += index % 3 === 0 ? 'fizz' : ''
    string += index % 5 === 0 ? 'buzz' : ''

    console.log(string || index)
  })
}
