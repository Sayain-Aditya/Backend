const mongoose = require("mongoose");

const cabBookingSchema = new mongoose.Schema({
  purpose: {
    type: String,
    enum: ['guest_transport', 'airport_pickup', 'airport_drop', 'local_sightseeing', 'other'],
    default: 'guest_transport'
  },
  guestName: {
    type: String,
    trim: true
  },
  roomNumber: {
    type: String,
    trim: true
  },
  bookingId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Booking'
  },
  grcNo: {
    type: String,
    trim: true
  },
  guestType: {
    type: String,
    enum: ['inhouse', 'external'],
    default: 'inhouse'
  },
  pickupLocation: {
    type: String,
    required: true,
    trim: true
  },
  destination: {
    type: String,
    required: true,
    trim: true
  },
  pickupTime: {
    type: Date,
    required: true
  },
  cabType: {
    type: String,
    enum: ['standard', 'premium', 'luxury'],
    default: 'standard'
  },
  specialInstructions: {
    type: String,
    trim: true
  },
  scheduled: {
    type: Boolean,
    default: false
  },
  vehicleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vehicle'
  },
  vehicleNumber: {
    type: String,
    trim: true
  },
  driverId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Driver'
  },
  driverName: {
    type: String,
    trim: true
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'on_route', 'completed', 'cancelled'],
    default: 'pending'
  },
  cancellationReason: {
    type: String,
    trim: true
  },
  fare: {
    type: Number,
    min: 0
  },
  notes: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("CabBooking", cabBookingSchema);