const express = require("express")
const routes = require("./routes")
const exphbs = require("express-handlebars")

require("./config/mongoose")

const app = express()
const port = 3000

//template engine
app.engine("hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }))
app.set("view engine", "hbs")

// middleware
app.use(routes)

app.listen(port, () => {
    console.log(`Listening http://localhost:${port}`)
})
