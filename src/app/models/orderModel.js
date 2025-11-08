// models/orderModel.js
import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  items: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      quantity: Number,
      price: Number,
    },
  ],
  totalAmount: Number,
  address: String,
  paymentMethod: String,
  status: String,
  razorpayOrderId: String,
}, { timestamps: true });

export default mongoose.models.Order || mongoose.model("Order", orderSchema);
