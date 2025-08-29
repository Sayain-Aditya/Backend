const MenuCategory = require("../models/MenuCategory");
const MenuItem = require("../models/MenuItem");

// ✅ Create Menu Item
exports.createMenuItem = async (req, res) => {
  try {
    const { name, category, type, price, isActive } = req.body;

    // Check if category exists
    const categoryExists = await MenuCategory.findById(category);
    if (!categoryExists) {
      return res.status(400).json({ error: "Invalid category ID" });
    }

    const item = new MenuItem({ name, category, type, price, isActive });
    await item.save();

    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Get All Menu Items (with Category populated)
exports.getAllMenuItems = async (req, res) => {
  try {
    const items = await MenuItem.find().populate("category", "name description");
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Get Single Menu Item by ID
exports.getMenuItemById = async (req, res) => {
  try {
    const item = await MenuItem.findById(req.params.id).populate("category", "name description");
    if (!item) return res.status(404).json({ error: "Menu item not found" });

    res.json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Update Menu Item
exports.updateMenuItem = async (req, res) => {
  try {
    if (req.body.category) {
      const categoryExists = await MenuCategory.findById(req.body.category);
      if (!categoryExists) {
        return res.status(400).json({ error: "Invalid category ID" });
      }
    }

    const item = await MenuItem.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .populate("category", "name description");

    if (!item) return res.status(404).json({ error: "Menu item not found" });

    res.json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Delete Menu Item
exports.deleteMenuItem = async (req, res) => {
  try {
    const item = await MenuItem.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ error: "Menu item not found" });

    res.json({ message: "Menu item deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
