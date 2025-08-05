import mongoose from "mongoose";

const caseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, default: "" },
  category: { type: String, enum: ["Criminal", "Civil", "Family", "Others"], default: "Others" },
  priority: { type: String, enum: ["High", "Medium", "Low"], default: "Medium" },
  status: { type: String, enum: ["Pending", "In Progress", "Resolved"], default: "Pending" },
  judgeAssigned: { type: mongoose.Schema.Types.ObjectId, ref: "Judge", default: null },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Case", caseSchema);
