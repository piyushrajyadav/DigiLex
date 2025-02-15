import express from "express";
import { uploadContract } from "../controllers/contractController.js";
import auth from "../utils/auth.js";
import multer from "multer";

const upload = multer();
const router = express.Router();
router.post("/", auth, upload.single("file"), uploadContract);

export default router;