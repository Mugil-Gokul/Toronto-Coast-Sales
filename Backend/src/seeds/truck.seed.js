const mongoose = require("mongoose");
const dotenv = require("dotenv");

const connectDB = require("../config/db");
const Truck = require("../models/Truck");

dotenv.config();

const trucks = [
  {
    title: "Volvo FH16 750",
    brand: "Volvo",
    model: "FH16",
    year: 2023,
    price: 185000,
    mileage: 12000,
    location: "Toronto",
    description: "Premium heavy-duty truck in excellent condition.",
    images: [],
    specifications: {
      engine: "16L",
      transmission: "Automatic",
      fuel: "Diesel",
      horsepower: "750 HP",
      color: "White",
    },
    features: ["ABS", "Air Suspension", "Cruise Control"],
    status: "available",
  },
  {
    title: "Volvo FMX 460",
    brand: "Volvo",
    model: "FMX",
    year: 2021,
    price: 138000,
    mileage: 54000,
    location: "Mississauga",
    description: "Reliable construction truck.",
    images: [],
    specifications: {
      engine: "13L",
      transmission: "Automatic",
      fuel: "Diesel",
      horsepower: "460 HP",
      color: "Yellow",
    },
    features: ["ABS", "Hill Assist"],
    status: "sold",
  },
  {
    title: "Scania R500",
    brand: "Scania",
    model: "R500",
    year: 2022,
    price: 162000,
    mileage: 28000,
    location: "Toronto",
    description: "Long-haul truck.",
    images: [],
    specifications: {
      engine: "13L",
      transmission: "Automatic",
      fuel: "Diesel",
      horsepower: "500 HP",
      color: "Blue",
    },
    features: ["Lane Assist", "Navigation"],
    status: "available",
  },
  {
    title: "Scania S650",
    brand: "Scania",
    model: "S650",
    year: 2024,
    price: 225000,
    mileage: 6000,
    location: "Hamilton",
    description: "Luxury heavy-duty truck.",
    images: [],
    specifications: {
      engine: "16L",
      transmission: "Automatic",
      fuel: "Diesel",
      horsepower: "650 HP",
      color: "Black",
    },
    features: ["Leather Seats", "Navigation", "Adaptive Cruise"],
    status: "available",
  },
  {
    title: "MAN TGX 18.510",
    brand: "MAN",
    model: "TGX",
    year: 2020,
    price: 112000,
    mileage: 79000,
    location: "Toronto",
    description: "Fuel-efficient truck.",
    images: [],
    specifications: {
      engine: "12.4L",
      transmission: "Manual",
      fuel: "Diesel",
      horsepower: "510 HP",
      color: "Silver",
    },
    features: ["ABS", "Bluetooth"],
    status: "sold",
  },
  {
    title: "MAN TGS 35.480",
    brand: "MAN",
    model: "TGS",
    year: 2023,
    price: 171000,
    mileage: 17000,
    location: "Brampton",
    description: "Heavy-duty tipper truck.",
    images: [],
    specifications: {
      engine: "12L",
      transmission: "Automatic",
      fuel: "Diesel",
      horsepower: "480 HP",
      color: "Red",
    },
    features: ["Hill Assist", "Camera"],
    status: "available",
  },
  {
    title: "Kenworth W990",
    brand: "Kenworth",
    model: "W990",
    year: 2023,
    price: 210000,
    mileage: 14000,
    location: "Toronto",
    description: "Premium highway truck.",
    images: [],
    specifications: {
      engine: "15L",
      transmission: "Automatic",
      fuel: "Diesel",
      horsepower: "605 HP",
      color: "White",
    },
    features: ["GPS", "Heated Seats"],
    status: "available",
  },
  {
    title: "Peterbilt 579",
    brand: "Peterbilt",
    model: "579",
    year: 2022,
    price: 189000,
    mileage: 24000,
    location: "London",
    description: "Comfortable long-distance truck.",
    images: [],
    specifications: {
      engine: "15L",
      transmission: "Automatic",
      fuel: "Diesel",
      horsepower: "565 HP",
      color: "Blue",
    },
    features: ["Navigation", "ABS"],
    status: "available",
  },
  {
    title: "Freightliner Cascadia",
    brand: "Freightliner",
    model: "Cascadia",
    year: 2021,
    price: 149000,
    mileage: 48000,
    location: "Ottawa",
    description: "Reliable fleet truck.",
    images: [],
    specifications: {
      engine: "14.8L",
      transmission: "Automatic",
      fuel: "Diesel",
      horsepower: "505 HP",
      color: "White",
    },
    features: ["Cruise Control", "Bluetooth"],
    status: "sold",
  },
  {
    title: "Western Star 49X",
    brand: "Western Star",
    model: "49X",
    year: 2024,
    price: 245000,
    mileage: 3000,
    location: "Toronto",
    description: "Heavy construction truck.",
    images: [],
    specifications: {
      engine: "16L",
      transmission: "Automatic",
      fuel: "Diesel",
      horsepower: "605 HP",
      color: "Orange",
    },
    features: ["Camera", "Navigation"],
    status: "available",
  }
];

const importData = async () => {
  try {
    await connectDB();

    await Truck.deleteMany();

    await Truck.insertMany(trucks);

    console.log("✅ Truck data imported successfully!");

    process.exit();
  } catch (error) {
    console.error(error);

    process.exit(1);
  }
};

// importData();