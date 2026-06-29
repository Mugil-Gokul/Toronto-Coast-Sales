const Truck = require("../models/Truck");
// const uploadToAzure = require("../utils/uploadToAzure");


// @desc Create Truck
// @route POST /api/trucks
const createTruck = async (req, res) => {
  try {
    const {
      title,
      brand,
      model,
      year,
      price,
      mileage,
      location,
      description,
      specifications,
      features,
      status,
      images = [],
    } = req.body;

    // Required field validation
    if (!title || !brand || !model || !year || !price) {
      return res.status(400).json({
        success: false,
        message:
          "Title, brand, model, year and price are required.",
      });
    }

    // Future duplicate validation
    // Example:
    // if (vin) {
    //   const existingTruck = await Truck.findOne({ vin });
    //
    //   if (existingTruck) {
    //     return res.status(400).json({
    //       success: false,
    //       message: "Truck with this VIN already exists.",
    //     });
    //   }
    // }

    // Azure Ready
    // Later you'll replace the images array
    // with uploaded Azure Blob URLs.

    const truck = await Truck.create({
      title,
      brand,
      model,
      year,
      price,
      mileage,
      location,
      description,
      specifications,
      features,
      status,
      images,
    });

    return res.status(201).json({
      success: true,
      message: "Truck created successfully.",
      data: truck,
    });
  } catch (error) {
    console.error("Create Truck Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to create truck.",
      error:
        process.env.NODE_ENV === "development"
          ? error.message
          : undefined,
    });
  }
};


// @desc Get all trucks
// @route GET /api/trucks
const getTrucks = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      search = "",
      status,
      brand,
      sort = "newest",
    } = req.query;

    // Build filter object
    const filter = {};

    // Search by title, brand or model
    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: "i" } },
        { brand: { $regex: search, $options: "i" } },
        { model: { $regex: search, $options: "i" } },
      ];
    }

    // Filter by status
    if (status) {
      filter.status = status;
    }

    // Filter by brand
    if (brand) {
      filter.brand = brand;
    }

    // Sorting
    let sortOption = {};

    switch (sort) {
  case "oldest":
    sortOption = { createdAt: 1 };
    break;

  case "price_low":
    sortOption = { price: 1 };
    break;

  case "price_high":
    sortOption = { price: -1 };
    break;

  case "newest":
  default:
    sortOption = { createdAt: -1 };
}

    const currentPage = Number(page);
    const pageSize = Number(limit);

    const totalTrucks = await Truck.countDocuments(filter);

    const trucks = await Truck.find(filter)
      .sort(sortOption)
      .skip((currentPage - 1) * pageSize)
      .limit(pageSize);

    res.status(200).json({
      success: true,
      message: "Trucks fetched successfully",

      trucks,

      pagination: {
        currentPage,
        totalPages: Math.ceil(totalTrucks / pageSize),
        totalTrucks,
        limit: pageSize,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// @desc Get single truck
// @route GET /api/trucks/:id
const getSingleTruck = async (req, res) => {
  try {
    const truck = await Truck.findById(req.params.id);

    if (!truck) {
      return res.status(404).json({
        success: false,
        message: "Truck not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Truck fetched successfully.",
      data: truck,
    });
  } catch (error) {
    console.error("Get Truck Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch truck.",
      error:
        process.env.NODE_ENV === "development"
          ? error.message
          : undefined,
    });
  }
};


// @desc Update truck
// @route PUT /api/trucks/:id
const updateTruck = async (req, res) => {
  try {
    const {
      title,
      brand,
      model,
      year,
      price,
      mileage,
      location,
      description,
      specifications,
      features,
      status,
      images,
    } = req.body;

    // Find truck first
    const truck = await Truck.findById(req.params.id);

    if (!truck) {
      return res.status(404).json({
        success: false,
        message: "Truck not found.",
      });
    }

    // Update only provided fields
    truck.title = title ?? truck.title;
    truck.brand = brand ?? truck.brand;
    truck.model = model ?? truck.model;
    truck.year = year ?? truck.year;
    truck.price = price ?? truck.price;
    truck.mileage = mileage ?? truck.mileage;
    truck.location = location ?? truck.location;
    truck.description = description ?? truck.description;
    truck.specifications =
      specifications ?? truck.specifications;
    truck.features = features ?? truck.features;
    truck.status = status ?? truck.status;
    truck.images = images ?? truck.images;

    const updatedTruck = await truck.save();

    return res.status(200).json({
      success: true,
      message: "Truck updated successfully.",
      data: updatedTruck,
    });
  } catch (error) {
    console.error("Update Truck Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to update truck.",
      error:
        process.env.NODE_ENV === "development"
          ? error.message
          : undefined,
    });
  }
};


// @desc Delete truck
// @route DELETE /api/trucks/:id
const deleteTruck = async (req, res) => {
  try {
    const truck = await Truck.findById(req.params.id);

    if (!truck) {
      return res.status(404).json({
        success: false,
        message: "Truck not found.",
      });
    }

    // Future Azure Blob cleanup
    // if (truck.images.length) {
    //   for (const imageUrl of truck.images) {
    //     await deleteFromAzure(imageUrl);
    //   }
    // }

    await truck.deleteOne();

    return res.status(200).json({
      success: true,
      message: "Truck deleted successfully.",
    });
  } catch (error) {
    console.error("Delete Truck Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to delete truck.",
      error:
        process.env.NODE_ENV === "development"
          ? error.message
          : undefined,
    });
  }
};


module.exports = {
  createTruck,
  getTrucks,
  getSingleTruck,
  updateTruck,
  deleteTruck,
};
