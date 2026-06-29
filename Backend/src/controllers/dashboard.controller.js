const Truck = require("../models/Truck");


// @desc Dashboard Statistics
// @route GET /api/dashboard/stats
// @access Private Admin

const getDashboardStats = async (req, res) => {
  try {

    const [
      totalTrucks,
      available,
      sold,
      inventory,
      recentTrucks,
    ] = await Promise.all([


      // Total trucks

      Truck.countDocuments(),


      // Available trucks

      Truck.countDocuments({
        status: "available",
      }),


      // Sold trucks

      Truck.countDocuments({
        status: "sold",
      }),


      // Inventory value

      Truck.aggregate([
        {
          $group: {
            _id: null,

            total: {
              $sum: "$price",
            },
          },
        },
      ]),


      // Latest added trucks

      Truck.find()
        .sort({
          createdAt: -1,
        })
        .limit(5)
        .select(
          "title brand model year price status images createdAt"
        ),

    ]);


    const inventoryValue =
      inventory.length > 0
        ? inventory[0].total
        : 0;



    res.status(200).json({

      success: true,

      data: {

        stats: {

          totalTrucks,

          available,

          sold,

          inventoryValue,

        },


        recentTrucks,

      },

    });


  } catch (error) {

    res.status(500).json({

      success: false,

      message: error.message,

    });

  }
};



module.exports = {
  getDashboardStats,
};