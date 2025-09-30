const mongoose = require("mongoose");

const cabBookingSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: true,
    trim: true
  },
  customerPhone: {
    type: String,
    required: true,
    trim: true
  },
  pickupLocation: {
    type: String,
    required: true,
    trim: true
  },
  dropLocation: {
    type: String,
    required: true,
    trim: true
  },
  pickupTime: {
    type: Date,
    required: true
  },
  vehicleType: {
    type: String,
    enum: ["sedan", "suv", "hatchback", "luxury"],
    default: "sedan"
  },
  fare: {
    type: Number,
    required: true,
    min: 0
  },
  status: {
    type: String,
    enum: ["pending", "confirmed", "on_route", "completed", "cancelled"],
    default: "pending"
  },
  driverName: {
    type: String,
    trim: true
  },
  driverPhone: {
    type: String,
    trim: true
  },
  vehicleNumber: {
    type: String,
    trim: true
  },
  notes: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("CabBooking", cabBookingSchema);