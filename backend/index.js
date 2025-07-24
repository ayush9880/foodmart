const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const connectDb = require("./db/connectDb");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes")


require("dotenv").config({ path: path.join(__dirname, "/.env") });


const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors()); 

app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(express.static(path.join(__dirname, '../frontend/dist')));


app.use("/api/user/", userRoutes);
app.use("/api/product/", productRoutes);

connectDb();

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send({ success: false, message: err.message });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
});

app.listen(port, (err) => {
    console.log(err || ` Server running on http://localhost:${port}`);
});
