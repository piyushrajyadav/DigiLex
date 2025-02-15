import express from "express";
import { createDAO } from "../controllers/daoController.js";
import auth from "../utils/auth.js";

const router = express.Router();
router.post("/", auth, createDAO);

export default router;