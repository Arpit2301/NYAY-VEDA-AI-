import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import caseRoutes from "./routes/caseRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


app.use("/api/cases", caseRoutes);

app.get("/", (req, res) => res.send("NYAY VEDA backend (minimal demo)"));

const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err));
