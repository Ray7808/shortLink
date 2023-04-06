const express = require('express')
const routes = require('./routes')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')

const app = express()
const port = 3000
require('./config/mongoose')

//template engine
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

// middleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(routes)

app.listen(port, () => {
    console.log(`Listening http://localhost:${port}`)
})
