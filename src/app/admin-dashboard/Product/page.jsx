"use client";

import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify"; // npm install react-toastify
import "react-toastify/dist/ReactToastify.css";

export default function ProductForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(e.target);

      // ✅ Send data using Axios
      const response = await axios.post("/api/product", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success("✅ Product added successfully!");
      e.target.reset();
      console.log("Server Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
      toast.error("❌ Failed to add product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-transparent p-6 max-w-7xl mx-auto mt-2 "
    >
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-2">
        🛒 Add New Product
      </h2>

      {/* GRID LAYOUT */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Input label="Product Name" name="name" placeholder="Enter product name" required />
        <Input label="Price" name="price" type="number" placeholder="Enter price" required />
        <Input label="Description" name="description" placeholder="Enter description" required />
        <Input label="Category" name="category" placeholder="Category name" required />
        <Input label="Quantity" name="quantity" type="number" placeholder="Available stock" required />
        <Input label="Power" name="power" placeholder="Power (e.g., 750W)" required />
        <Input label="Usage" name="usage" placeholder="Home / Commercial" required />
        <Input label="Number of Speeds" name="numberOfSpeeds" type="number" placeholder="e.g., 3" required />
        <SelectField label="ISI Certified" name="isiCertified" options={["true", "false"]} required />
        <Input label="Warranty" name="warranty" placeholder="Warranty (e.g., 2 years)" required />
        <Input label="Uses" name="uses" placeholder="E.g., Blending, Grinding" required />
        <Input label="Body Material" name="bodyMaterial" placeholder="Material type" required />
        <Input label="Number of Blades" name="numberOfBlades" type="number" placeholder="e.g., 4" required />
        <Input label="Country of Origin" name="countryOfOrigin" placeholder="Made in..." required />
        <Input label="Voltage" name="voltage" placeholder="e.g., 220V" required />
        <Input label="Frequency" name="frequency" placeholder="e.g., 50Hz" required />
        <Input label="Brand Name" name="brandName" placeholder="Brand" required />
        <Input label="Model Name" name="modelName" placeholder="Model" required />
        <Input label="Material" name="material" placeholder="Material type" required />
        <Input label="Color" name="color" placeholder="Product color" required />

        {/* File Input */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Product Images
          </label>
          <input
            type="file"
            name="images"
            multiple
            className="border-b border-gray-300 px-3 py-2 text-sm focus:ring-0 focus:border-blue-600 focus:outline-none mt-1"
            required
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end mt-8">
        <button
          type="submit"
          disabled={loading}
          className={`px-6 py-2.5 rounded-lg font-medium text-white transition ${
            loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Adding..." : "Add Product"}
        </button>
      </div>
    </form>
  );
}

function Input({ label, name, type = "text", placeholder }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className="border-b border-gray-300 px-3 py-2 text-sm focus:ring-0 focus:border-blue-600 focus:outline-none bg-transparent"
      />
    </div>
  );
}

function SelectField({ label, name, options = [] }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <select
        name={name}
        id={name}
        className="border-b border-gray-300 px-3 py-2 text-sm focus:ring-0 focus:border-blue-600 focus:outline-none bg-transparent"
      >
        <option value="">Select...</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt === "true" ? "Yes" : opt === "false" ? "No" : opt}
          </option>
        ))}
      </select>
    </div>
  );
}
