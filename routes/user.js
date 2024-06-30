const express = require("express")
const { register, login, user } = require("../controlls/User")
// const login = require("../controlls/User")
const userRouter = express.Router()

userRouter.post("/register", register)
userRouter.post("/login", login)
userRouter.get("/all", user)

module.exports = userRouter