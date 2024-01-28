const express = require('express')
const dotenv = require('dotenv')
const dbConnect = require('./config/database')
const router = require('./routes/user.routes')

dotenv.config()

const app = express()
const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`)
})

dbConnect()

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.use('/api', router)