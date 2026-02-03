import mongoose, { Schema, models } from "mongoose";

const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    composition: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true, // Tablet, Syrup, Capsule
    },
    dosageForm: {
      type: String,
    },
    strength: {
      type: String,
    },
    price: {
      type: Number,
    },
    prescriptionRequired: {
      type: Boolean,
      default: false,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Product =
  models.Product || mongoose.model("Product", ProductSchema);
