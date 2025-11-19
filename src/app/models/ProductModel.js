import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    description: String,
    category: String,
    quantity: Number,
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
    color: String,
    images: [
      {
        data: String, // Base64 encoded
        contentType: String,
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.models.Product ||
  mongoose.model("Product", productSchema);
