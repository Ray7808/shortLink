const express = require('express');
const router = express.Router();
const shortLinkPair = require('../../models/shortLinkPair');
const shortLink = require('../../shortLink');
const initialURL = 'http://localhost:3000/'; // 之後要修改網址可以只改這行

router.get('/', (req, res) => {
    // 顯示頁面供使用者輸入網址
    res.render('index')
})
router.get('/:shortWords', (req, res) => {
    //透過回傳的短網址，從mongoDB找到對應的網址並重新導向
    const shortWords = req.params.shortWords
    shortLinkPair
        .find({ outputLink: shortWords })
        .lean()
        .then((LinkPair) => {
            return res.redirect(LinkPair[0].inputLink)
        })
        .catch((error) => console.log(error))
})
router.get('/success/:shortWords', (req, res) => {
    // 顯示成功的短網址連結
    const shortWords = req.params.shortWords
    res.render('success', { initialURL: initialURL, shortWords: shortWords })
})
router.post('/shortLink', (req, res) => {
    // 先確認資料庫有沒有對應的URL，沒有就使用shortLink隨機產生新的shortURL
    const inputURL = req.body.inputURL
    let outputURL = ''
    let shortWords = ''

    shortLinkPair
        .find({ inputLink: inputURL })
        .lean()
        .then((outputLink) => {
            outputURL = outputLink
            if (outputURL.length) {
                shortWords = outputURL[0].outputLink
                res.redirect(`/success/${shortWords}`)
            } else {
                shortWords = shortLink()
                return shortLinkPair
                    .create({ inputLink: inputURL, outputLink: shortWords })
                    .then(() => res.redirect(`/success/${shortWords}`))
                    .catch((error) => console.log(error))
            }
        })
        .catch((error) => console.log(error))
})

module.exports = router
