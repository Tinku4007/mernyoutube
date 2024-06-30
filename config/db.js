// config/db.js
const mongoose = require("mongoose")

const mongoUrl = 'mongodb://127.0.0.1:27017/mernyoutube';

const mongooseDB = async () => {
    try {
        await mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('Error connecting to MongoDB', error);
    }
};

module.exports = mongooseDB
