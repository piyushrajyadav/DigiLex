import mongoose from "mongoose";

const documentSchema = new mongoose.Schema({
  type: { type: String, required: true },
  content: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
});

export default mongoose.model("Document", documentSchema);