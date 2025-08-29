const mongoose = require("mongoose");

const MenuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },        // Paneer Tikka
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "MenuCategory",
    required: true
  },
  type: { type: String, enum: ["Veg", "NonVeg"], required: true }, 
  price: { type: Number, default: 0 },           // optional (if standalone order)
  isActive: { type: Boolean, default: true }     // show/hide in menu
}, { timestamps: true });

module.exports = mongoose.model("MenuItem", MenuItemSchema);
