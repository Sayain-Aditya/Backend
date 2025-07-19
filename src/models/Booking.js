const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  // 🔹 Core Booking Info
  grcNo: { type: String, unique: true, required: true },  // Guest Registration Card No
  reservationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Reservation', default: null },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    //required: true
  },
  roomNumber: {
    type: Number,
    //required: true
  },
  numberOfRooms: {
    type: Number,
    default: 1
  },
  isActive: {
    type: Boolean,
    default: true
  },
  referenceNumber: {
    type: String,
    //required: true,
    unique: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  // 🔹 Contact Info
  contactDetails: {
    phone: String,
    email: String,
    address: String,
    city: String,
    state: String,
    country: String,
    pinCode: String
  },

  // 🔹 Identity Info
  identityDetails: {
    idType: {
      type: String,
      enum: ['Aadhaar', 'PAN', 'Passport', 'Driving License', 'Voter ID', 'Other']
    },
    idNumber: String,
    idPhotoFront: String, // Cloudinary URL
    idPhotoBack: String,
    photoUrl:String,
  },

  // 🔹 Booking Details
  bookingInfo: {
    checkIn: {
      type: Date,
      //required: true
    },
    checkOut: {
      type: Date,
      //required: true
    },
    arrivalFrom: String,
    bookingType: {
      type: String,
      enum: ['Online', 'Walk-in', 'Agent', 'Corporate', 'Other']
    },
    purposeOfVisit: String,
    remarks: String,
    adults: Number,
    children: Number
  },
  
  // 🔹 Extension History
  extensionHistory: [
    {
      originalCheckIn: { type: Date },
      originalCheckOut: { type: Date },
      extendedCheckOut: { type: Date },
      extendedOn: { type: Date, default: Date.now },
      reason: String,
      additionalAmount: Number,
      paymentMode: {
        type: String,
        enum: ['Cash', 'Card', 'UPI', 'Bank Transfer', 'Other']
      },
      approvedBy: String
    }
  ],

  // 🔹 Payment Info
  paymentDetails: {
    totalAmount: Number,
    advancePaid: Number,
    paymentMode: {
      type: String,
      enum: ['Cash', 'Card', 'UPI', 'Bank Transfer', 'Other']
    },
    billingName: String,
    billingAddress: String,
    gstNumber: String
  }
});

module.exports = mongoose.model('Booking', bookingSchema);
