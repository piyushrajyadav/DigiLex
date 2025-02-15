import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import documentRoutes from "./routes/documentRoutes.js";
import contractRoutes from "./routes/contractRoutes.js";
import daoRoutes from "./routes/daoRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { errorHandler } from "./utils/errorHandler.js";
import { logger } from "./utils/logger.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(logger);

// Routes
app.use("/api/documents", documentRoutes);
app.use("/api/contracts", contractRoutes);
app.use("/api/daos", daoRoutes);
app.use("/api/users", userRoutes);

// Error handling
app.use(errorHandler);

// Database connection
connectDB();

export default app;