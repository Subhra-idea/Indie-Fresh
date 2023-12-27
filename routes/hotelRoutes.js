import express from "express";
const router = express.Router();
import { getHotel, postHotel } from "../controller/Hotel/getHotel.js";


router.get(
    '/getHotel',
    getHotel
)
router.post(
    '/postHotel',
    postHotel
)
export default router;