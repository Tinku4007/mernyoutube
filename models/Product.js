const mongoose = require("mongoose")

const ProductSchema = mongoose.Schema({
    title: { type: String, require: true },
    discription: { type: String, require: true },
    price: { type: String, require: true },
    category: { type: String, require: true },
    qty: { type: String, require: true },
    imgSrc: { type: String, require: true },
    createdAt: { type: String, require: true },
})

module.exports = mongoose.model("Products", ProductSchema)