// "use server";
// import { NextResponse } from "next/server";
// import  connectDB  from "@/app/lib/db";
// import Product from "@/app/models/ProductModel";

// // 🟢 CREATE Product
// export async function POST(req) {
//   try {
//     await connectDB();
//     const body = await req.json();

//     const newProduct = await Product.create(body);
//     return NextResponse.json(
//       { message: "Product created successfully", product: newProduct },
//       { status: 201 }
//     );
//   } catch (error) {
//     return NextResponse.json(
//       { message: "Error creating product", error: error.message },
//       { status: 500 }
//     );
//   }
// }

// // 🔵 GET All Products
// export async function GET() {
//   try {
//     await connectDB();
//     const products = await Product.find({});
//     return NextResponse.json(products, { status: 200 });
//   } catch (error) {
//     return NextResponse.json(
//       { message: "Error fetching products", error: error.message },
//       { status: 500 }
//     );
//   }
// }

import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import  connectDB  from "@/app/lib/db";
import Product from "@/app/models/ProductModel";

export const runtime = "nodejs"; // 🔥 required for file system access

// 🟢 POST — Create product with multiple images
export async function POST(req) {
  try {
    await connectDB();

    const formData = await req.formData();

    // Extract all fields
    const name = formData.get("name");
    const price = Number(formData.get("price"));
    const description = formData.get("description");
    const category = formData.get("category");
    const quantity = Number(formData.get("quantity"));
    const power = formData.get("power");
    const usage = formData.get("usage");
    const numberOfSpeeds = Number(formData.get("numberOfSpeeds"));
    const isiCertified = formData.get("isiCertified") === "true";
    const warranty = formData.get("warranty");
    const uses = formData.get("uses");
    const bodyMaterial = formData.get("bodyMaterial");
    const numberOfBlades = Number(formData.get("numberOfBlades"));
    const countryOfOrigin = formData.get("countryOfOrigin");
    const voltage = formData.get("voltage");
    const frequency = formData.get("frequency");
    const brandName = formData.get("brandName");
    const modelName = formData.get("modelName");
    const material = formData.get("material");

    // Handle multiple file uploads
    const files = formData.getAll("images");
    const uploadDir = path.join(process.cwd(), "public/uploads");

    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const imagePaths = [];
    for (const file of files) {
      const buffer = Buffer.from(await file.arrayBuffer());
      const filename = `${Date.now()}-${file.name.replace(/\s+/g, "_")}`;
      const filePath = path.join(uploadDir, filename);
      fs.writeFileSync(filePath, buffer);
      imagePaths.push(`/uploads/${filename}`);
    }

    const newProduct = await Product.create({
      name,
      price,
      description,
      images: imagePaths,
      category,
      quantity,
      power,
      usage,
      numberOfSpeeds,
      isiCertified,
      warranty,
      uses,
      bodyMaterial,
      numberOfBlades,
      countryOfOrigin,
      voltage,
      frequency,
      brandName,
      modelName,
      material,
    });

    return NextResponse.json(
      { message: "Product created successfully", product: newProduct },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json(
      { message: "Error creating product", error: error.message },
      { status: 500 }
    );
  }
}

// 🔵 GET — Fetch all products
export async function GET() {
  try {
    await connectDB();
    const products = await Product.find({});
    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching products", error: error.message },
      { status: 500 }
    );
  }
}
