const MenuLimit = require("../models/MenuLimit");

// ✅ Create new MenuLimit
exports.createMenuLimit = async (req, res) => {
  try {
    const menuLimit = new MenuLimit(req.body);
    const savedLimit = await menuLimit.save();
    res.status(201).json(savedLimit);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ✅ Get all MenuLimits
exports.getAllMenuLimits = async (req, res) => {
  try {
    const menuLimits = await MenuLimit.find()
      .populate("name", "foodType packageType basePrice") // RatePlan info
      .populate("plans.Veg.category", "name")             // Veg categories
      .populate("plans.NonVeg.category", "name");         // NonVeg categories

    res.status(200).json(menuLimits);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get single MenuLimit by ID
exports.getMenuLimitById = async (req, res) => {
  try {
    const menuLimit = await MenuLimit.findById(req.params.id)
      .populate("name", "foodType packageType basePrice")
      .populate("plans.Veg.category", "name")
      .populate("plans.NonVeg.category", "name");

    if (!menuLimit) {
      return res.status(404).json({ message: "MenuLimit not found" });
    }

    res.status(200).json(menuLimit);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Update MenuLimit
exports.updateMenuLimit = async (req, res) => {
  try {
    const updatedLimit = await MenuLimit.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedLimit) {
      return res.status(404).json({ message: "MenuLimit not found" });
    }

    res.status(200).json(updatedLimit);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ✅ Delete MenuLimit
exports.deleteMenuLimit = async (req, res) => {
  try {
    const deleted = await MenuLimit.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "MenuLimit not found" });
    }

    res.status(200).json({ message: "MenuLimit deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
