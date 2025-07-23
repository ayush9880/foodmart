const Product = require("../model/productModel"); // adjust path as needed

const addProductController = async (req, res) => {
    try {
        const { name, price, stock, category, description } = req.body;

        let image = null;
        if (req.file) {
            image = {
                filename: req.file.filename,
                path: "http://localhost:5000/uploads/" + req.file.filename,
            };
        }
        const newProduct = new Product({
            name,
            price,
            stock,
            category,
            description,
            image
        });

        await newProduct.save();

        res.status(201).send({
            success: true,
            message: "Product added successfully",
            data: newProduct
        });

    } catch (error) {
        console.error(error);
        res.status(500).send({
            success: false,
            message: error.message
        });
    }
};

const deleteProduct = async (req, res) => {
    try {
        let { id } = req.params;

        let product = await Product.findById(id);
        if (!product) {
            return res.status(404).send({ success: false, message: "Product not found" });
        }
        await Product.findByIdAndDelete(id);
        res.send({ success: true, message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
};


const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, price, stock, category, description } = req.body;

        let updated = { name, price, stock, category, description };

        if (req.file) {
            updated.image = {
                filename: req.file.filename,
                path: "http://localhost:5000/uploads/" + req.file.filename, // ✅ store relative path!
            };
        }

        const updatedProduct = await Product.findByIdAndUpdate(
            id,
            { $set: updated },
            { new: true }
        );

        if (!updatedProduct) {
            return res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Product updated successfully",
            data: updatedProduct,
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};



const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).send({
            success: true,
            message: "All products fetched successfully",
            data: products
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            success: false,
            message: error.message
        });
    }
};

const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        console.log(product);
        if (!product) {
            return res.status(404).send({
                success: false,
                message: "Product not found",
            });
        }

        res.status(200).send({
            success: true,
            message: "Product fetched successfully",
            data: product,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            success: false,
            message: error.message,
        });
    }
};


const addToCartController = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const userId = req.user.id;

    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({ success: false, message: "Invalid product ID" });
    }
const user = await User.findById(userId);
if (!user) {
  return res.status(404).json({ success: false, message: "User not found" });
}

if (!user.cart) {
  user.cart = [];
}

    const qty = Math.max(1, parseInt(quantity) || 1);

    const cartItem = user.cart.find(item => item.product.toString() === productId);
    if (cartItem) {
      cartItem.quantity += qty;
    } else {
      user.cart.push({ product: productId, quantity: qty });
    }

    await user.save();

    res.status(200).json({
      success: true,
      message: "Product added to cart",
      cart: user.cart,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};



module.exports = { addProductController, deleteProduct, updateProduct, getAllProducts, getProductById }
