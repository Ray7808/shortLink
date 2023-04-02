const db = require("../../config/mongoose")
const shortLinkPair = require("../shortLinkPair")

db.once("open", () => {
    shortLinkPair.create({ inputLink: `https://www.google.com/`, outputLink: `52yUe` })
    shortLinkPair.create({ inputLink: `https://www.facebook.com/`, outputLink: `123aZ` })
    shortLinkPair.create({ inputLink: `https://www.youtube.com/`, outputLink: `82eTq` })
    shortLinkPair.create({ inputLink: `https://tw.yahoo.com/`, outputLink: `l23yz` })
    console.log("done.")
})
