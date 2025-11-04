import { NextResponse } from "next/server";
import connectDB from "@/app/lib/db";
import Cart from "@/app/models/cartModel";
import User from "@/app/models/UserModels";
import Product from "@/app/models/ProductModel";

export async function POST(req) {
  try {
    await connectDB();
    const { userId, productId, quantity } = await req.json();

    if (!userId || !productId) {
      return NextResponse.json(
        { message: "User ID and Product ID are required" },
        { status: 400 }
      );
    }

    const user = await User.findById(userId);
    const product = await Product.findById(productId);

    if (!user || !product) {
      return NextResponse.json(
        { message: "User or Product not found" },
        { status: 404 }
      );
    }

    // Find or create cart for user
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({ userId, items: [] });
    }

    // Check if product already in cart
    const existingItem = cart.items.find(
      (item) => item.productId.toString() === productId
    );

    if (existingItem) {
      existingItem.quantity += quantity || 1;
    } else {
      cart.items.push({ productId, quantity: quantity || 1 });
    }

    await cart.save();

    return NextResponse.json({
      message: "✅ Product added to cart",
      cart,
    });
  } catch (error) {
    console.error("Add to cart error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
