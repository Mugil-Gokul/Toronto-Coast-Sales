const Truck = require("../models/Truck");


// @desc Create truck
// @route POST /api/trucks
const createTruck = async (req, res) => {

  try {

    const truck = await Truck.create(req.body);


    res.status(201).json({
      success:true,
      truck
    });


  } catch(error){

    res.status(500).json({
      message:error.message
    });

  }

};




// @desc Get all trucks
// @route GET /api/trucks
const getTrucks = async (req,res)=>{

  try{


    const trucks = await Truck.find()
      .sort({
        createdAt:-1
      });


    res.json({
      success:true,
      count:trucks.length,
      trucks
    });


  }catch(error){

    res.status(500).json({
      message:error.message
    });

  }

};




// @desc Get single truck
// @route GET /api/trucks/:id
const getSingleTruck = async(req,res)=>{


  try{


    const truck =
      await Truck.findById(req.params.id);



    if(!truck){

      return res.status(404).json({
        message:"Truck not found"
      });

    }



    res.json({
      success:true,
      truck
    });



  }catch(error){

    res.status(500).json({
      message:error.message
    });

  }

};




// @desc Update truck
// @route PUT /api/trucks/:id
const updateTruck = async(req,res)=>{


  try{


    const truck =
      await Truck.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new:true
        }
      );



    if(!truck){

      return res.status(404).json({
        message:"Truck not found"
      });

    }



    res.json({
      success:true,
      truck
    });



  }catch(error){

    res.status(500).json({
      message:error.message
    });

  }

};





// @desc Delete truck
// @route DELETE /api/trucks/:id
const deleteTruck = async(req,res)=>{


  try{


    const truck =
      await Truck.findByIdAndDelete(
        req.params.id
      );



    if(!truck){

      return res.status(404).json({
        message:"Truck not found"
      });

    }



    res.json({
      success:true,
      message:"Truck deleted"
    });



  }catch(error){

    res.status(500).json({
      message:error.message
    });

  }


};





module.exports = {

  createTruck,
  getTrucks,
  getSingleTruck,
  updateTruck,
  deleteTruck

};