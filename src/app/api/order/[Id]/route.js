import { NextResponse } from "next/server";
import connectDB from "@/app/lib/db";
import Order from "@/app/models/orderModel";
import mongoose from "mongoose";

export async function GET(req, context) {
  try {
    await connectDB();

    const { userId } = await context.params; // ✅ unwrap the params promise

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return NextResponse.json(
        { message: "Invalid userId format" },
        { status: 400 }
      );
    }

    // ✅ Convert userId to ObjectId before querying
    const orders = await Order.find({
      userId: new mongoose.Types.ObjectId(userId),
    })
      .populate("items.productId")
      .sort({ createdAt: -1 });

    // ✅ If no orders found, give friendly response
    if (!orders || orders.length === 0) {
      return NextResponse.json(
        { message: "No orders found for this user", orders: [] },
        { status: 200 }
      );
    }

    return NextResponse.json(orders, { status: 200 });
  } catch (error) {
    console.error("Error fetching orders:", error);
    return NextResponse.json(
      { message: "Error fetching orders", error },
      { status: 500 }
    );
  }
}
