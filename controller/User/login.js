import { validationResult } from "express-validator";
import UserSchema from "../../models/user.js";
import { compare } from "bcrypt";
import jwt from "jsonwebtoken";

export const loginUser = async (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.json({
      success: false,
      message: result,
    });
  } else {
    try {
      const { email, password } = req.body;
      const checkUser = await UserSchema.findOne({ email: email });
      if (!checkUser) {
        console.log("User not found");
        return res.json({
          success: false,
          message: "Account not found",
        });
      }
      const checkPassword = await compare(password, checkUser.password);
      if (!checkPassword) {
        return res.json({
          success: false,
          messgae: "incorrect credentials",
        });
      }
      const JWT_SECRET = "jwt-secret";
      const data = {
        id: checkUser._id,
      };
      const token = jwt.sign(data, JWT_SECRET);
      const finalData = {
        token: token,
        user: {
          email: checkUser.email,
          name: checkUser.name,
          _id: checkUser._id,
          phone: checkUser.phone,
        },
      };
      return res.json({
        success: true,
        message: "Login successful  ",
        finalData,
      });
    } catch (error) {
      console.error(error.message);
      return res.json({
        success: false,
        message: error.message,
      });
    }
  }
};
