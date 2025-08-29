const MenuCategory = require("../models/MenuCategory");

// ✅ Create Category
exports.createCategory = async (req, res) => {
  try {
    const { name, description, isActive } = req.body;

    const categoryExists = await MenuCategory.findOne({ name });
    if (categoryExists) {
      return res.status(400).json({ error: "Category already exists" });
    }

    const category = new MenuCategory({ name, description, isActive });
    await category.save();

    res.status(201).json(category);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Get All Categories
exports.getAllCategories = async (req, res) => {
  try {
    const categories = await MenuCategory.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Get Single Category by ID
exports.getCategoryById = async (req, res) => {
  try {
    const category = await MenuCategory.findById(req.params.id);
    if (!category) return res.status(404).json({ error: "Category not found" });

    res.json(category);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Update Category
exports.updateCategory = async (req, res) => {
  try {
    const category = await MenuCategory.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!category) return res.status(404).json({ error: "Category not found" });

    res.json(category);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Delete Category
exports.deleteCategory = async (req, res) => {
  try {
    const category = await MenuCategory.findByIdAndDelete(req.params.id);
    if (!category) return res.status(404).json({ error: "Category not found" });

    res.json({ message: "Category deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
