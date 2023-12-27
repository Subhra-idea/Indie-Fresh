import express from "express";
const router = express.Router();
import { body } from "express-validator";
import { addUser } from "../controller/User/Create.js";
import { loginUser } from "../controller/User/login.js";

router.post(
  "/addUser",
  [
    body("name", "Enter a valid name minimum 4 characters").isLength({
      min: 3,
    }),
    body("email", "Enter a valid email ").isEmail(),
    body("password", "Enter a password").isLength({ min: 4 }),
    body("phone", "Enter a phone number").isNumeric(),
  ],
  addUser
);
router.post(
  "/loginUser",
  [
   
    body("email", "Enter a valid email ").isEmail(),
    body("password", "Enter a password").isLength({ min: 4 }),
    
  ],
  loginUser
);
export default router;
