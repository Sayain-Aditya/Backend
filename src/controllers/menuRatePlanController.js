const RatePlan = require("../models/MenuRatePlan");

// ✅ Create new rate plan
exports.createRatePlan = async (req, res) => {
  try {
    const { foodType, packageType, basePrice, taxPercent } = req.body;

    // Check duplicate
    const existing = await RatePlan.findOne({ foodType, packageType });
    if (existing) {
      return res.status(400).json({ message: "Rate plan already exists" });
    }

    const plan = new RatePlan({ foodType, packageType, basePrice, taxPercent });
    await plan.save();

    res.status(201).json({ message: "Rate plan created successfully", plan });
  } catch (err) {
    res.status(500).json({ message: "Error creating rate plan", error: err.message });
  }
};

// ✅ Get all rate plans
exports.getAllRatePlans = async (req, res) => {
  try {
    const plans = await RatePlan.find().sort({ foodType: 1, packageType: 1 });
    res.status(200).json(plans);
  } catch (err) {
    res.status(500).json({ message: "Error fetching rate plans", error: err.message });
  }
};

// ✅ Get rate plan by ID
exports.getRatePlanById = async (req, res) => {
  try {
    const plan = await RatePlan.findById(req.params.id);
    if (!plan) return res.status(404).json({ message: "Rate plan not found" });
    res.status(200).json(plan);
  } catch (err) {
    res.status(500).json({ message: "Error fetching rate plan", error: err.message });
  }
};

// ✅ Get rate plan by foodType + packageType
exports.getPriceByFoodTypeAndPackage = async (req, res) => {
  try {
    const { foodType, packageType } = req.query;
    const plan = await RatePlan.findOne({ foodType, packageType });

    if (!plan) return res.status(404).json({ message: "Rate plan not found" });

    const taxAmount = (plan.basePrice * plan.taxPercent) / 100;
    const totalPrice = plan.basePrice + taxAmount;

    res.status(200).json({ ...plan._doc, taxAmount, totalPrice });
  } catch (err) {
    res.status(500).json({ message: "Error fetching price", error: err.message });
  }
};

// ✅ Update rate plan
exports.updateRatePlan = async (req, res) => {
  try {
    const plan = await RatePlan.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!plan) return res.status(404).json({ message: "Rate plan not found" });

    res.status(200).json({ message: "Rate plan updated", plan });
  } catch (err) {
    res.status(500).json({ message: "Error updating rate plan", error: err.message });
  }
};

// ✅ Delete rate plan
exports.deleteRatePlan = async (req, res) => {
  try {
    const plan = await RatePlan.findByIdAndDelete(req.params.id);
    if (!plan) return res.status(404).json({ message: "Rate plan not found" });

    res.status(200).json({ message: "Rate plan deleted" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting rate plan", error: err.message });
  }
};
