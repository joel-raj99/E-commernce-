// app/api/razorpay-webhook/route.js
import { NextResponse } from "next/server";

export async function POST(req) {
  const payload = await req.text();
  console.log("Webhook Payload:", payload);

  // Validate webhook signature if needed
  return NextResponse.json({ received: true });
}
