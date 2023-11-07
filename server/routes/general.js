import express from "express";
import { studentLogin , adminLogin , register } from "../controllers/auth.js";

const router = express.Router();

router.post("/studentlogin", studentLogin);
router.post("/adminlogin",adminLogin);
router.post("/register",register);

export default router;