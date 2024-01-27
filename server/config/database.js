const mongoose = require('mongoose')
require('dotenv').config()
const url = process.env.DATABASE_URL

const dbConnect = async () => {
    await mongoose.connect(url)
    .then(() => {
        console.log("Database connected successfully")
    })
    .catch((err) => {
        console.log("Error in database connection")
        console.log(err)
        process.exit(1)
    })
}

module.exports = dbConnect