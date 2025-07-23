const router = require("express").Router();
const path = require("path")
const multer = require("multer")

const { addProductController, deleteProduct, updateProduct, getAllProducts, getProductById } = require("../controllers/productController");
const upload = require("../middleware/upload");

router.post('/addProduct', upload.single('img'), addProductController);
router.delete("/deleteproduct/:id", deleteProduct)
router.put("/updateproduct/:id", upload.single("img"), updateProduct)
router.get("/allProduct", getAllProducts)
router.get("/getProduct/:id", getProductById);
 console.log("")
module.exports = router; 