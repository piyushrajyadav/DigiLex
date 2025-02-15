import express from "express";
import { createDocument, getDocuments } from "../controllers/documentController.js";
import auth from "../utils/auth.js";

const router = express.Router();
router.post("/", auth, createDocument);
router.get("/", auth, getDocuments);

export default router;