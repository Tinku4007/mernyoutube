const express = require("express")
const { products, getProducts } = require("../controlls/Products")
const productRouter = express.Router()

productRouter.post("/add", products)
productRouter.post("/all", getProducts)

module.exports = productRouter