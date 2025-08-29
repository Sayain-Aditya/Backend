const express = require("express");
const router = express.Router();
const menuItemController = require("../controllers/menuItemController");

// ✅ Create Menu Item
router.post("/create", menuItemController.createMenuItem);

// ✅ Get All Menu Items
router.get("/all", menuItemController.getAllMenuItems);

// ✅ Get Menu Item by ID
router.get("/get/:id", menuItemController.getMenuItemById);

// ✅ Update Menu Item
router.put("/update/:id", menuItemController.updateMenuItem);

// ✅ Delete Menu Item
router.delete("/delete/:id", menuItemController.deleteMenuItem);

module.exports = router;
