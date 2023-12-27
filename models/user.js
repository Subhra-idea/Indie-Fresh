import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

const UserSchema = mongoose.model("User", userSchema);
export default UserSchema