const Product = require("../models/product");

const getAllProducts = async (req, res) => {
    const productDetails = await Product.find(req.query).sort("-pid");
    //res.status(200).json({msg: "I am getAllProducts"});
    res.status(200).json({ productDetails, nbHits: productDetails.length});
};

const getAllProductsTesting = async (req, res) => {
    res.status(200).json({msg: "I am getAllProductsTesting"})
};

module.exports = { getAllProducts, getAllProductsTesting };

