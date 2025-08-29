const express = require("express");
const router = express.Router();
const menuCategoryController = require("../controllers/menuCategoryController");

// ✅ Create Category
router.post("/create", menuCategoryController.createCategory);

// ✅ Get All Categories
router.get("/all", menuCategoryController.getAllCategories);

// ✅ Get Category by ID
router.get("/get/:id", menuCategoryController.getCategoryById);

// ✅ Update Category
router.put("/update/:id", menuCategoryController.updateCategory);

// ✅ Delete Category
router.delete("/delete/:id", menuCategoryController.deleteCategory);

module.exports = router;
