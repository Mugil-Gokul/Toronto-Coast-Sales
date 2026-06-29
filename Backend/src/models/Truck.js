const mongoose = require("mongoose");

const truckSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    brand: {
      type: String,
      required: true,
    },

    model: {
      type: String,
      required: true,
    },

    year: {
      type: Number,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    mileage: {
      type: Number,
    },

    location: {
      type: String,
    },

    description: {
      type: String,
    },

    // Azure image URLs
    images: [
      {
        type: String,
      },
    ],

    specifications: {
      engine: {
        type: String,
      },

      transmission: {
        type: String,
      },

      fuel: {
        type: String,
      },

      horsepower: {
        type: String,
      },

      color: {
        type: String,
      },
    },

    features: [
      {
        type: String,
      },
    ],

    status: {
      type: String,
      enum: ["available", "sold"],
      default: "available",
    },
    featured: {
      type: Boolean,
      default: false,
    },

    stockNumber: {
      type: String,
    },

    vin: {
      type: String,
      unique: true,
      sparse: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Truck", truckSchema);
