import mongoose from "mongoose";

const daoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  contractAddress: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
});

export default mongoose.model("DAO", daoSchema);