const express = require('express')
const dotenv = require('dotenv')
const dbConnect = require('./config/database')
const userRouter = require('./routes/user.routes')
const authRouter = require('./routes/auth.routes')

dotenv.config()

const app = express()
const PORT = process.env.PORT || 4000
app.use(express.json())

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`)
})

dbConnect()

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.use('/api/user', userRouter)
app.use('/api/auth', authRouter)