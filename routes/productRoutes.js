const express = require("express");

const { isadmin, requireSignIn } = require("../middlewares/userMiddleware");
const formidable = require("express-formidable");
const { createProductController, updateProductController, getProductController, getSingleProductController, productPhotoController, deleteProductController } = require("../controllers/productController");

const router = express.Router();

// Routes
router.post(
  "/create-product",
  requireSignIn,
  isadmin,
  formidable(),
 createProductController
);

router.put(
  "/update-product/:pid",
  requireSignIn,
  isadmin,
  formidable(),
  updateProductController
);

// Get all products
router.get("/get-product", getProductController);

// Get single product
router.get("/get-product/:slug", getSingleProductController);

// Get product photo
router.get("/product-photo/:pid", productPhotoController);

// Delete product
router.delete("/product/:pid", deleteProductController);

module.exports = router;
