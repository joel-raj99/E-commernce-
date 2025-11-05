import User from "@/app/models/UserModels"; // ✅ Important import
import Profile from "@/app/models/profileModel";
import connectDB from "@/app/lib/db";
import { NextResponse } from "next/server";


// ✅ Create Profile (POST)
export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();
    const {
      userId,
      firstName,
      lastName,
      address,
      city,
      state,
      zipCode,
      email,
      phone,
      secondaryphone,
      landmark,
    } = body;

    // ✅ Validation
    if (
      !userId ||
      !firstName ||
      !lastName ||
      !address ||
      !city ||
      !state ||
      !zipCode ||
      !email ||
      !phone ||
      !secondaryphone ||
      !landmark
    ) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    // ✅ Create new profile
    const newProfile = await Profile.create({
      userId,
      firstName,
      lastName,
      address,
      city,
      state,
      zipCode,
      email,
      phone,
      secondaryphone,
      landmark,
    });

    return NextResponse.json(
      { message: "Profile created successfully", profile: newProfile },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating profile:", error);
    return NextResponse.json(
      { message: "Server error", error: error.message },
      { status: 500 }
    );
  }
}



export async function GET() {
  try {
    await connectDB();

    const profiles = await Profile.find().populate("userId", "username email");

    return NextResponse.json({ profiles }, { status: 200 });
  } catch (error) {
    console.error("Error fetching profiles:", error);
    return NextResponse.json(
      { message: "Server error", error: error.message },
      { status: 500 }
    );
  }
}

