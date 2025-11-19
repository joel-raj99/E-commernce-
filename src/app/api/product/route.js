import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";
import connectDB from "@/app/lib/db";
import Product from "@/app/models/productModel";

export const config = {
  api: {
    bodyParser: false, // ✅ Disable default body parser to handle multipart data
  },
};

export async function POST(req) {
  try {
    await connectDB();

    const formData = await req.formData();
    const fields = {};
    for (const [key, value] of formData.entries()) {
      fields[key] = value;
    }

    // ✅ Convert number fields
    const numberFields = [
      "price",
      "quantity",
      "numberOfSpeeds",
      "numberOfBlades",
    ];
    numberFields.forEach((field) => {
      if (fields[field]) fields[field] = Number(fields[field]);
    });

    // ✅ Boolean conversion
    if (fields.isiCertified)
      fields.isiCertified = fields.isiCertified === "true" ? true : false;

    // ✅ Handle image file upload
    const image = formData.get("image");
    let imagePath = "";

    if (image && image.name) {
      const buffer = Buffer.from(await image.arrayBuffer());
      const fileName = `${Date.now()}-${image.name}`;
      const filePath = path.join(process.cwd(), "public", "uploads", fileName);
      await writeFile(filePath, buffer);
      imagePath = `/uploads/${fileName}`;
    }

    const product = new Product({ ...fields, image: imagePath });
    await product.save();

    return NextResponse.json(
      { message: "Product added successfully", product },
      { status: 201 }
    );
  } catch (err) {
    console.error("Error adding product:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
