import HotelSchema from "../../models/hotel.js";

// import { hotels } from "../../../client/src/utils/hotels"
``

export const getHotel = async (req, res) => {
  try {
    const finalData = await HotelSchema.find();
    res.json({
      success: true,
      data: finalData,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "error while getting",
    });
  }
};
export const postHotel = async (req, res) => {
  try {
    const data = req.body;
    const { name, description, Location, facilities, price, img } = data;
    const newHotel = new HotelSchema({
      name,
      description,
      Location,
      facilities,
      price,
      img,
    });
    console.log(newHotel);
    const saveHotel = await newHotel.save();
    return res.status(200).json({
      success: true,
      message: "Hotel added successfully",
    });
  } catch (error) {
    console.error(error.message);
    return res.json({
      success: false,
      message: error.message,
    });
  }
};
