const express = require("express");
const {
  categoryController,
  createCategoryControlller,
  deleteCategoryCOntroller,
  singleCategoryController,
  updateCategoryController,
  
} = require("../controllers/categoryController");

const {
  isadmin,
  requireSignIn,
} = require("../middlewares/userMiddleware");

const router = express.Router();

// Routes

// Create category
router.post(
  "/create-category",
  requireSignIn,
  isadmin,
  createCategoryControlller
);

// Update category
router.put(
  "/update-category/:id",
  requireSignIn,
  isadmin,
  updateCategoryController
);

// Get all categories
router.get("/get-category",categoryController);

// Get single category by slug
router.get("/single-category/:slug", singleCategoryController);

// Delete category
router.delete(
  "/delete-category/:id",
  requireSignIn,
  isadmin,
  deleteCategoryCOntroller
);

module.exports = router;
