const mongoose = require("mongoose");

const MenuLimitSchema = new mongoose.Schema({
  name: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "RatePlan",
    required: true
  },
    // Veg aur Non-Veg ke liye alag plans
    plans: {
      Veg: [
        {
          category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category", // Category reference
            required: true,
          },
          limit: {
            type: Number,
            required: true,
            default: 0, // how many items allowed
          },
        },
      ],
      NonVeg: [
        {
          category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
            required: true,
          },
          limit: {
            type: Number,
            required: true,
            default: 0,
          },
        },
      ],
    },
  
    createdAt: { type: Date, default: Date.now },
  });
  
  module.exports = mongoose.model("MenuLimit", MenuLimitSchema);
  