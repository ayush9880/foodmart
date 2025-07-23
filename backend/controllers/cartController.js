const Cart = require('../model/cartModel');

const addToCart = async (req, res) => {
    const userId = req.user.id; // ✅ use JWT
    console.log(userId)
    const { productId, name, price, quantity, img } = req.body;

    try {
        let cart = await Cart.findOne({ userId });

        if (!cart) {
            cart = new Cart({
                userId,
                items: [{ productId, name, price, quantity, img }]
            });
        } else {
            const itemIndex = cart.items.findIndex(
                (item) => item.productId === productId
            );  

            if (itemIndex > -1) {
                cart.items[itemIndex].quantity += quantity;
            } else {
                cart.items.push({ productId, name, price, quantity, img });
            }
        }

        await cart.save();
        res.status(200).json({ success: true, cart });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

// GET /api/cart/:userId
const getCart = async (req, res) => {
    const userId = req.user.id; // ✅ from JWT
    try {
        const cart = await Cart.findOne({ userId });
        if (!cart) {
            return res.status(200).json({ success: true, cart: { items: [] } });
        }
        res.status(200).json({ success: true, cart });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};


const removeFromCart = async (req, res) => {
    const userId = req.user.id; // ✅ from JWT
    const { itemId } = req.params;

    try {
        const cart = await Cart.findOne({ userId });
        if (!cart) {
            return res.status(404).json({ success: false, message: "Cart not found" });
        }

        cart.items = cart.items.filter(
            (item) => item._id.toString() !== itemId
        );
        await cart.save();

        res.status(200).json({ success: true, cart });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};


module.exports = { addToCart, getCart, removeFromCart }


