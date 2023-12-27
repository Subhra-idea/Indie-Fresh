import { validationResult } from "express-validator";
import UserSchema from "../../models/user.js";
import { hash } from "bcrypt";

export const addUser = async (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.json({
      success: false,
      message: "Enter valid details ",
      result: result
    });
  } else {
    try {
      const user = req.body;
      const { name, email, password, phone } = user;
      const hashPassword = await hash(password, 10);

      const newUser = new UserSchema({
        name,
        email,
        password: hashPassword,
        phone,
      });
      console.log("from create controller: ", newUser);
      const saveUser = await newUser.save();
      return res.status(200).json({
        success: true,
        message: "Account Created successfully",
      });
    } catch (error) {
        console.error(error.message);
        return res.json({
            success: false,
            message:error.message
        })
    }
  }
};
