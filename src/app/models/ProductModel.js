// import mongoose from "mongoose";

// const ProductSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//     },
//     price: {
//       type: Number,
//       required: true,
//     },
//     description: {
//       type: String,
//       required: true,
//     },
//     image: {
//       type: String,
//       required: true,
//     },
//     category: {
//       type: String,
//       required: true,
//     },
//     quantity: {
//       type: Number,
//       default: 0,
//       required: true,
//       min: 0,
//     },

//     // 🔧 Additional fields from your data
//     power: {
//       type: String, // e.g., "750W"
//       required: true,
//     },
//     usage: {
//       type: String, // e.g., "Wet & Dry Grinding"
//       required: true,
//     },
//     numberOfSpeeds: {
//       type: Number, // e.g., 3
//       required: true,
//     },
//     isiCertified: {
//       type: Boolean, // e.g., Yes → true, No → false
//       default: false,
//     },
//     warranty: {
//       type: String, // e.g., "1 year"
//       required: true,
//     },
//     uses: {
//       type: String, // e.g., "Domestic"
//       required: true,
//     },
//     bodyMaterial: {
//       type: String, // e.g., "Plastic"
//       required: true,
//     },
//     numberOfBlades: {
//       type: Number, // e.g., 3
//       required: true,
//     },
//     countryOfOrigin: {
//       type: String, // e.g., "Made in India"
//       required: true,
//     },
//     voltage: {
//       type: String, // e.g., "240V"
//       required: true,
//     },
//     frequency: {
//       type: String, // e.g., "50Hz"
//       required: true,
//     },
//     brandName: {
//       type: String, // e.g., "Mercy"
//       required: true,
//     },
//     modelName: {
//       type: String, // e.g., "Bonus"
//       required: true,
//     },
//     material: {
//       type: String, // e.g., "ABS Plastic & Stainless Steel"
//       required: true,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// const Product =
//   mongoose.models.Product || mongoose.model("Product", ProductSchema);

// export default Product;

import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    images: [String], // multiple image paths
    category: { type: String, required: true },
    quantity: { type: Number, default: 0, required: true, min: 0 },
    power: { type: String, required: true },
    usage: { type: String, required: true },
    numberOfSpeeds: { type: Number, required: true },
    isiCertified: { type: Boolean, default: false },
    warranty: { type: String, required: true },
    uses: { type: String, required: true },
    bodyMaterial: { type: String, required: true },
    numberOfBlades: { type: Number, required: true },
    countryOfOrigin: { type: String, required: true },
    voltage: { type: String, required: true },
    frequency: { type: String, required: true },
    brandName: { type: String, required: true },
    modelName: { type: String, required: true },
    material: { type: String, required: true },
  },
  { timestamps: true }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);

export default Product;
