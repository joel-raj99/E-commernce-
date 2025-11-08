import { NextResponse } from "next/server";
import Razorpay from "razorpay";
import connectDB from "../../lib/db.js";
import Order from "../../models/orderModel.js";
import Cart from "../../models/cartModel.js";

// ✅ Initialize Razorpay
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export async function POST(req) {
  try {
    await connectDB();

    const { userId, address, paymentMethod } = await req.json();

    // ✅ Fetch cart
    const cart = await Cart.findOne({ userId }).populate("items.productId");
    if (!cart || cart.items.length === 0) {
      return NextResponse.json({ message: "Cart is empty" }, { status: 400 });
    }

    // ✅ Calculate total amount
    const totalAmount = cart.items.reduce(
      (acc, item) => acc + item.productId.price * item.quantity,
      0
    );

    // ✅ COD order
    if (paymentMethod === "COD") {
      const newOrder = new Order({
        userId,
        items: cart.items.map((item) => ({
          productId: item.productId._id,
          quantity: item.quantity,
          price: item.productId.price,
        })),
        totalAmount,
        address,
        paymentMethod: "COD",
        status: "Pending",
      });

      await newOrder.save();

      // Clear cart
      cart.items = [];
      await cart.save();

      return NextResponse.json(
        { message: "Order placed successfully (COD)", order: newOrder },
        { status: 201 }
      );
    }

    // ✅ Razorpay Online Payment
    if (paymentMethod === "Online") {
      const options = {
        amount: totalAmount * 1, // amount in paise
        currency: "INR",
        receipt: `receipt_${Date.now()}`,
        notes: {
          userId,
          address,
        },
      };

      const razorpayOrder = await razorpay.orders.create(options);

      // Temporary save (status: "Pending Payment")
      const newOrder = new Order({
        userId,
        items: cart.items.map((item) => ({
          productId: item.productId._id,
          quantity: item.quantity,
          price: item.productId.price,
        })),
        totalAmount,
        address,
        paymentMethod: "Online",
        status: "Pending",
        razorpayOrderId: razorpayOrder.id,
      });

      await newOrder.save();

      return NextResponse.json(
        {
          id: razorpayOrder.id,
          amount: razorpayOrder.amount,
          currency: razorpayOrder.currency,
          key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { message: "Invalid payment method" },
      { status: 400 }
    );
  } catch (error) {
    console.error("Order POST error:", error);
    return NextResponse.json(
      { message: "Error processing order", error: error.message },
      { status: 500 }
    );
  }
}


export async function GET(req) {
  try {
    await connectDB();

    // Get userId from query (optional)
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");

    let orders;

    if (userId) {
      // 🧍 Fetch specific user's orders
      orders = await Order.find({ userId })
        .populate("items.productId", "name price")
        .sort({ createdAt: -1 });
    } else {
      // 🧑‍💼 Admin fetch all orders
      orders = await Order.find()
        .populate("userId", "username email")
        .populate("items.productId", "name price")
        .sort({ createdAt: -1 });
    }

    if (!orders || orders.length === 0) {
      return NextResponse.json({ message: "No orders found" }, { status: 404 });
    }

    return NextResponse.json({ orders }, { status: 200 });
  } catch (error) {
    console.error("Order GET error:", error);
    return NextResponse.json(
      { message: "Error fetching orders", error: error.message },
      { status: 500 }
    );
  }
}