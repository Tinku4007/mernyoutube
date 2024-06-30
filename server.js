const express = require("express")
const cors = require("cors")
const mongooseDB = require("./config/db")
const userRouter = require("./routes/user")
const productRouter = require("./routes/Product")

const PORT = 1000
mongooseDB()
const app = express()
app.use(cors())
app.use(express.json())
app.get("/" ,(req, res)=>{
    res.json("home")
})
app.use("/api/user", userRouter)
app.use("/api/product", productRouter)

app.listen(PORT, () => (
    console.log(`server running on port ${PORT}`)
))