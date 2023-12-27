import mongoose from "mongoose";
const hotelSchema = new mongoose.Schema({
   name:String,
   description:String,
   Location: String,
   price: String,
   facilities:[String],
   img:{
    type:String,
    default:String,
   }

})
const HotelSchema = mongoose.model("hotels", hotelSchema);
export default HotelSchema