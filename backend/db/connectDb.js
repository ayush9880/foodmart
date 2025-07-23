const mongoose = require("mongoose");

let connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("database connected successfully ")
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDb;