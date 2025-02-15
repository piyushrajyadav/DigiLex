import mongoose from "mongoose";

const contractSchema = new mongoose.Schema({
  cid: { type: String, required: true }, // IPFS content ID
  review: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
});

export default mongoose.model("Contract", contractSchema);