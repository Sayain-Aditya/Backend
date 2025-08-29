const mongoose = require("mongoose");

const MenuCategorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },  // e.g., Starter, MainCourse
  description: { type: String },                        // optional
  isActive: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model("MenuCategory", MenuCategorySchema);
