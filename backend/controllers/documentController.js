import Document from "../models/Document.js";
import { generateDocument } from "../services/aiService.js";

export const createDocument = async (req, res) => {
  try {
    const { type } = req.body;
    const content = await generateDocument(type);
    const document = await Document.create({ type, content, user: req.user.id });
    res.status(201).json(document);
  } catch (error) {
    res.status(500).json({ error: "Failed to generate document" });
  }
};

export const getDocuments = async (req, res) => {
  try {
    const documents = await Document.find({ user: req.user.id });
    res.json(documents);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch documents" });
  }
};