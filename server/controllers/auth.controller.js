const User = require("../models/user.model")
const bcrypt = require('bcrypt')
const { errorHandler } = require("../utils/error")

exports.authController = async (req, res, next) => {
    try {
        const { username, email, password } = req.body

        const existingUser = await User.findOne({ email })
        if (existingUser) {
            // return res.status(400).json({
            //     success: false,
            //     message: "User already registered"
            // })
            next(errorHandler(400, "User already registered"))
        }

        if (!email || !password || !username || email === '' || password === '' || email === '') {
            return res.status(400).json({
                success: false,
                message: "Please fill all the details"
            })
        }

        let hashedPassword

        try {
            hashedPassword = await bcrypt.hash(password, 10)
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Error in hashing password"
            })
        }

        const user = User.create({
            username, email, password: hashedPassword
        })
        return res.status(200).json({
            success: true,
            message: "User created successfully"
        })

    } catch (error) {
        next(error)
    }
}