import Contract from "../models/Contract.js";
import { reviewContract } from "../services/aiService.js";
import { storeOnIPFS } from "../services/ipfsService.js";

export const uploadContract = async (req, res) => {
  try {
    const { file } = req;
    const cid = await storeOnIPFS(file.buffer);
    const review = await reviewContract(file.buffer.toString());
    const contract = await Contract.create({ cid, review, user: req.user.id });
    res.status(201).json(contract);
  } catch (error) {
    res.status(500).json({ error: "Failed to upload contract" });
  }
};