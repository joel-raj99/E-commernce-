import { NextResponse } from "next/server";
import Stripe from "stripe";
import connectDB from "../../lib/db.js";
import Order from "../../models/orderModel.js";
import Cart from "../../models/cartModel.js";


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    await connectDB();

    const { userId, address, paymentMethod } = await req.json();

    // ✅ Fetch cart
    const cart = await Cart.findOne({ userId }).populate("items.productId");
    if (!cart || cart.items.length === 0) {
      return NextResponse.json({ message: "Cart is empty" }, { status: 400 });
    }

    // ✅ Calculate total
    const totalAmount = cart.items.reduce(
      (acc, item) => acc + item.productId.price * item.quantity,
      0
    );

    if (paymentMethod === "COD") {
      // 🧾 Directly create COD order
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

      // 🧹 Clear cart
      cart.items = [];
      await cart.save();

      return NextResponse.json(
        { message: "Order placed successfully (COD)", order: newOrder },
        { status: 201 }
      );
    } else if (paymentMethod === "Online") {
      // 💳 Create Stripe Checkout Session
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "payment",
        line_items: cart.items.map((item) => ({
          price_data: {
            currency: "inr",
            product_data: {
              name: item.productId.name,
            },
            unit_amount: item.productId.price * 100, // Stripe expects paise
          },
          quantity: item.quantity,
        })),
        success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/payment/cancel`,
        metadata: {
          userId,
          address,
          totalAmount,
        },
      });

      return NextResponse.json({ url: session.url }, { status: 200 });
    } else {
      return NextResponse.json(
        { message: "Invalid payment method" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Order POST error:", error);
    return NextResponse.json(
      { message: "Error processing order", error: error.message },
      { status: 500 }
    );
  }
}
