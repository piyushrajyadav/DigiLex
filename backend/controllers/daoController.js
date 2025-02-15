import DAO from "../models/DAO.js";
import { deployDAOContract } from "../services/blockchainService.js";

export const createDAO = async (req, res) => {
  try {
    const { name, description } = req.body;
    const contractAddress = await deployDAOContract(name, description);
    const dao = await DAO.create({ name, description, contractAddress, user: req.user.id });
    res.status(201).json(dao);
  } catch (error) {
    res.status(500).json({ error: "Failed to create DAO" });
  }
};