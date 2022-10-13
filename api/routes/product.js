const router = require("express").Router();
const Product = require("../models/Product");

// create product
router.post("/products", async (req, res) => {
  const newProduct = req.body;
  try {
    const product = await Product.create(newProduct);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json("Error creating the product");
  }
});

// get all products
router.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
});

// get all categories
router.get("/products/categories", async (req, res) => {
  try {
    const categories = await Product.find().distinct("category");
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json(error);
  }
});

// get all brands
router.get("/products/brands", async (req, res) => {
  try {
    const brands = await Product.find().distinct("brand");
    res.status(200).json(brands);
  } catch (error) {
    res.status(500).json(error);
  }
});

// get products of category
router.get("/products/:category", async (req, res) => {
  const category = req.params.category;
  try {
    const products = await Product.find({
      category: { $regex: category, $options: "i" },
    });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
});

// get a single product by Id
router.get("/products/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json("product not found in the database");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// delete a product
router.delete("/products/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product deleted from the database");
  } catch (error) {
    res.status(500).json(error);
  }
});

// update a product
router.put("/products/:id", async (req, res) => {
  const newProduct = req.body;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      newProduct,
      {
        new: true,
      }
    );
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
