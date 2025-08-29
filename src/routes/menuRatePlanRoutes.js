const express = require("express");
const router = express.Router();
const ratePlanController = require("../controllers/menuRatePlanController");

// ✅ Create
router.post("/create", ratePlanController.createRatePlan);

// ✅ Get all
router.get("/all", ratePlanController.getAllRatePlans);

// ✅ Get by ID
router.get("/get/:id", ratePlanController.getRatePlanById);

// ✅ Get by foodType + packageType (price calculation)
router.get("/price/search", ratePlanController.getPriceByFoodTypeAndPackage);

// ✅ Update
router.put("/update/:id", ratePlanController.updateRatePlan);

// ✅ Delete
router.delete("/delete/:id", ratePlanController.deleteRatePlan);

module.exports = router;
