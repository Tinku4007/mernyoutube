const User = require("../models/User")
const bcrypt = require("bcryptjs")

const register = async (req, res) => {
    const salt = 10
    const { name, email, password } = req.body
    try {
        let user = await User.findOne({ email })
        const hash = bcrypt.hashSync(password, salt);
        if (user) {
            res.json({ success: false, message: "user already exist" })
        } else {
            user = await User.create({ name: name, email: email, password: hash })
            res.json({ success: true, message: "user register successfully..!" })
        }
    } catch (error) {
        res.json({ success: false, message: error })
    }
}


const login = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ email })
        if (!user) {
            return res.json({ success: false, message: "User does not exist" });
        }
        const isPasswordCorrect = bcrypt.compareSync(password, user.password);
        if (!isPasswordCorrect) {
            return res.json({ success: false, message: "passowrd does not match" })
        }
        res.json({ success: true, message: "login successfully", data: user })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message });
    }
}


const user = async (req, res) => {
    try {
        const user = await User.find().sort({createdAt:-1})
        console.log(user)
        res.json({data:user , success:true})
    } catch (error) {
        res.json({success:false })
        console.log(error)
    }
}



module.exports = { register, login , user }