const multer = require("multer");
const path = require("path");

let finalpath = path.join(__dirname, "../uploads")
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/")
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

module.exports = multer({ storage: storage })