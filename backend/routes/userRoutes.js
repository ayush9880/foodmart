const router = require("express").Router();
const path = require("path")
const multer = require("multer")
const { allUserController, registController, getProfileController, loginController, forgotpassword, updateUserController, verifyOtp, deleteUserController, newPassword, resetPassword, getProfile } = require("../controllers/userControllers");
const upload = require("../middleware/upload");
const { addToCart, getCart, removeFromCart } = require("../controllers/cartController");
const verifyToken = require("../middleware/verifyToken");       

// userRoutes.......................................................................

router.get("/allusers", allUserController);
router.post("/registration", upload.single("img"), registController);
router.post("/login", loginController);
router.post("/forgot-password", forgotpassword)
router.post("/verify-otp", verifyOtp)
router.post("/new-password", newPassword)
router.post("/reset-password", resetPassword)
router.delete("/deleteuser/:id", deleteUserController);
router.put("/updateUser/:email", updateUserController)
router.get("/getProfile", verifyToken, getProfileController) 

// cart Routes  .module.......................................................   
router.post("./addtocart",addToCart);
router.get("/cart", verifyToken, getCart);
router.delete("/removeFromCart/:itemId", verifyToken, removeFromCart);  


module.exports = router;