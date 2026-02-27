import mongoose from "mongoose"

const propertySchema = new mongoose.Schema(
  {
    location: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ["UNDER CONSTRUCTION", "READY TO MOVE", "SOLD OUT"],
    },
    size: {
      type: String,
      required: true,
    },
    bookingAmount: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    gallery: {
      type: [String], 
      default: [],
    },
  },
  { timestamps: true }
);

const Property = mongoose.model("Property", propertySchema);

export default Property;