import express from "express";
const router = express.Router();
import { checkout } from "../controller/payment/checkout.js";


router.post("/checkout-session", checkout);
export default router;
