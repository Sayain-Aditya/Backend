const express = require("express");
const router = express.Router();
const menuLimitController = require("../controllers/menuLimitController");

// ✅ Create MenuLimit
router.post("/create", menuLimitController.createMenuLimit);

// ✅ Get all MenuLimits
router.get("/all", menuLimitController.getAllMenuLimits);

// ✅ Get MenuLimit by ID
router.get("/:id", menuLimitController.getMenuLimitById);

// ✅ Update MenuLimit
router.put("/update/:id", menuLimitController.updateMenuLimit);

// ✅ Delete MenuLimit
router.delete("/delate/:id", menuLimitController.deleteMenuLimit);

module.exports = router;
