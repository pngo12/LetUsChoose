const express = require('express')
const router = require('./routes')

const app = express()

const port = 3000

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.listen(port, () => console.log(`running on ${port}`))

app.use('/', router)

module.exports = app