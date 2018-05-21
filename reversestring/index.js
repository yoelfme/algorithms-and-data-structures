const reverse1 = (str) => str.split('').reverse().join('')
const reverse2 = (str) => {
    let reversed = ''

    for (let character of str) {
        reversed = `${character}${reversed}`
    }
    
    return reversed
}


module.exports = (str) => {
    return str.split('').reduce((rev, char) => char +  rev, '')
}
