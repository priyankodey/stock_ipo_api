require("dotenv").config();
const cors = require("cors");

const express = require("express");
const app = express();
app.use(cors());
const connectDB = require("./db/connect");

const PORT = process.env.PORT || 5000;

const products_routes = require("./routes/products");

app.get("/",(req, res) => {
    res.send("I am live");
});

// middleware or to set server
app.use("/api/products", products_routes);

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () => {
            console.log("Here I am connected");
        });
    } catch (error) {
        console.log(error);
    }
};

start();