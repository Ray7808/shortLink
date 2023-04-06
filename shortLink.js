function randomGeneratedURL(array) {
    const index = Math.floor(Math.random() * array.length)
    return array[index]
}

function shortLink() {
    //產生英文大小寫及數字的字串
    const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowerCaseLetters = upperCaseLetters.toLowerCase()
    const numbers = '1234567890'
    let outputURL = ''

    //將所有字串用split及concat變成一個包含各個字元的array
    let URLBase = []
    URLBase = URLBase.concat(upperCaseLetters.split(''))
    URLBase = URLBase.concat(lowerCaseLetters.split(''))
    URLBase = URLBase.concat(numbers.split(''))

    //產生五位隨機亂數的數字及英文大小寫
    for (let i = 0; i < 5; i++) {
        outputURL += randomGeneratedURL(URLBase)
    }
    return outputURL
}

module.exports = shortLink
