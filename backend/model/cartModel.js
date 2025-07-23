const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    items: [
        {
            productId: { type: String, required: true },
            name: String,
            price: Number, 
            quantity: Number,
            img: { filename: String, path: String },
        },
    ],
});  

module.exports = mongoose.model('Cart', cartSchema);
