const express = require("express")
const router = express.Router()
const shortLinkPair = require("../../models/shortLinkPair")
const shortLink = require("../../shortLink")

router.get("/", (req, res) => {
    res.render("index")
})
router.get("/success", (req, res) => {
    res.render("success")
})
router.post("/shortLink", (req, res) => {
    // 先確認資料庫有沒有對應的URL，沒有就使用shortLink隨機產生新的shortURL(待處理)
    const inputURL = req.body.inputURL
    console.log(inputURL)
    res.redirect("/success")
})

module.exports = router
