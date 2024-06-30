const Products = require("../models/Product")

const products = async (req, res) => {
    const { title, discription, price, category, qty, imgSrc } = req.body
    try {
        const product = await Products.create({
            title,
            discription,
            price,
            category,
            qty,
            imgSrc
        })
        res.json({ success: true, message: "product created succeccfully", data: product })
    } catch (error) {
        console.log(error)
    }
}


const getProducts = async (req, res) => {
    try {
        const products = await Products.find().sort({ createdAt: -1 })
        res.json({ success: true, message:"All Product" , data: products })
    } catch (error) {
        console.log(error)
    }
}
module.exports = {products , getProducts}