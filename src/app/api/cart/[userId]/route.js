import { NextResponse } from "next/server";
import connectDB from "@/app/lib/db";
import Cart from "@/app/models/cartModel";
export async function GET(req, { params }) {
  try {
    await connectDB();
    const { userId } = await params; // ✅ FIXED HERE

    const cart = await Cart.findOne({ userId }).populate("items.productId");

    if (!cart) {
      return NextResponse.json(
        { message: "Cart not found for this user" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "🛒 Cart fetched successfully",
      cart,
    });
  } catch (error) {
    console.error("Get cart error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}