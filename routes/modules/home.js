const express = require("express")
const router = express.Router()
const shortLink = require("../../models/shortLink")

router.get("/", (req, res) => {
    res.render("index")
})
router.get("/success", (req, res) => {
    res.render("success")
})
router.post("/shortLink", (req, res) => {
    const inputURL = req.body.inputURL

    console.log(inputURL)
    res.redirect("/success")
})

module.exports = router
