const mongoose = require("mongoose");

const RatePlanSchema = new mongoose.Schema(
  {
    foodType: {
      type: String,
      enum: ["Veg", "NonVeg"], // Veg / NonVeg
      required: true,
    },
    packageType: {
      type: String,
      enum: ["Silver", "Gold", "Platinum"], // Silver / Gold / Platinum
      required: true,
    },
    basePrice: {
      type: Number,
      required: true, // per pax price
    },
    taxPercent: {
      type: Number,
      required: true,
      default: 18, // GST/VAT default
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("RatePlan", RatePlanSchema);
