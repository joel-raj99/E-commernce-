import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    image: [{ type: String, required: true }],  // ✅ Array of image URLs — fine
    category: { type: String, required: true },
    quantity: { type: Number, default: 0, min: 0 }, // ✅ Inventory control

    // Optional specs — all fine as they are
    power: String,
    usage: String,
    numberOfSpeeds: Number,
    isiCertified: Boolean,
    warranty: String,
    uses: String,
    bodyMaterial: String,
    numberOfBlades: Number,
    countryOfOrigin: String,
    voltage: String,
    frequency: String,
    brandName: String,
    modelName: String,
    material: String,
  },
  { timestamps: true }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
